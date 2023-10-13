import path from 'path';
import pino from 'pino';
import { isMainThread } from 'worker_threads';
import { Env } from './util/env';

function getOutPath(...paths: string[]) {
  return path.resolve(__dirname, '../out', new Date().toLocaleDateString('en-ZA'), ...paths);
}

let logger = pino({
  level: Env.LOG_LEVEL,

  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: getOutPath('logs.log'),
          mkdir: true
        },
        level: 'trace'
      },
      {
        target: 'pino-pretty',
        level: Env.LOG_LEVEL,
        options: {
          translateTime: 'SYS:HH:MM:ss.l',
          colorize: true,
          levelFirst: true,
          ignore: 'pid,hostname'
        }
      }
    ]
  }
}).child({ name: isMainThread ? 'Kawasaki' : 'Kawasaki Worker' });

for (const [key, value] of Object.entries(logger)) {
  //@ts-expect-error - This is a hack to allow passing the logger functions as references
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  typeof value === 'function' && (logger[key] = logger[key].bind(logger));
}

export const Log = logger;
