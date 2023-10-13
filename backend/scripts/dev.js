const { spawn } = require('child_process');
const { watch } = require('chokidar');
const path = require('path');
const { replaceTscAliasPaths } = require('tsc-alias');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const $ = (cmd) => (/^win/.test(process.platform) ? `${cmd}.cmd` : cmd);

const ROUTES = path.resolve(__dirname, '../src/routes');
const DIST = path.resolve(__dirname, '../dist');
const TSCONFIG = path.resolve(__dirname, '../tsconfig.build.json');
const SERVER = path.resolve(__dirname, '../dist/index.js');
const SWAGGER_JSON = path.resolve(__dirname, '../swagger.json');

const LINES_TO_IGNORE = [
  'Starting compilation in watch mode',
  'Watching for file changes.',
  'Introspecting code',
  'Exporting code to',
  'A swagger client generator for typescript',
  'File change detected.'
];

const PANEL = `[R] Restart server 
 [↵] Clean          
 [L] Clear console `;

function clearConsole() {
  console.log(`\x1b[2J\x1b[H\x1b[47m\x1b[30m ${PANEL} \x1b[0m\n`);
}

/**
 * @param {import('child_process').ChildProcess | undefined} oldServer
 */
async function handleDistChange(oldServer) {
  if (oldServer && !oldServer.killed) {
    oldServer.kill('SIGTERM');
    await Promise.race([
      new Promise((res) => oldServer.once('exit', res)),
      new Promise((res) => setTimeout(res, 1000))
    ]);
  }

  await replaceTscAliasPaths({ configFile: TSCONFIG });

  clearConsole();

  console.log('\u0007');
  return spawn('node', [SERVER, '--inspect'], { stdio: 'inherit' });
}

function handleOutput(data, color = '90') {
  const str = data.toString().trim();

  if (!str) {
    return;
  }

  line: for (const line of str.split('\n')) {
    for (const ignored of LINES_TO_IGNORE) {
      if (line.includes(ignored)) {
        continue line;
      }
    }

    console.log(`\x1b[${color}m${line.trim()}\x1b[0m`);
  }
}

function spawnKita() {
  const kita = spawn($('kita'), ['generate']);
  kita.stdout.on('data', handleOutput);
}

function spawnOrval() {
  const orval = spawn($('pnpm'), ['--filter', '@fdm/frontend', 'orval']);
  orval.stdout.on('data', handleOutput);
}

async function main() {
  const tsc = spawn($('tsc'), ['-w', '-p', TSCONFIG, '--preserveWatchOutput']);
  tsc.stdout.on('data', (out) => handleOutput(out, '31'));

  spawnKita();

  watch(ROUTES, { awaitWriteFinish: { stabilityThreshold: 2500 } }).on('change', () => {
    spawnKita();
  });

  spawnOrval();

  watch(SWAGGER_JSON, { awaitWriteFinish: { stabilityThreshold: 2500 } }).on('change', () => {
    spawnOrval();
  });

  let server = await handleDistChange();

  // used to prevent multiple server restarts at the same time
  let serverPromise;

  function updateServer() {
    if (serverPromise) {
      return;
    }

    serverPromise = handleDistChange(server)
      .then((newServer) => {
        server = newServer;
        serverPromise = undefined;
      })
      .catch((err) => {
        console.error({ err });
        serverPromise = undefined;
      });
  }

  watch(`${DIST}`).on('change', () => updateServer());

  process.stdin.on('keypress', (_, key) => {
    if (key.ctrl && key.name === 'c') {
      if (server) server.kill('SIGTERM');
      process.exit(0);
    }

    if (key.name === 'r') {
      updateServer();
      spawnKita();
      spawnOrval();
    }

    if (key.name === 'l') {
      clearConsole();
    }
  });
}

main().catch(console.error);
