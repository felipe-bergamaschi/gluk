import { isMainThread } from 'worker_threads';
import onShutdown from 'close-with-grace';

import { HealthcheckController } from './routes';
import { createApp } from './app';
import { Log } from './logger';
import { Env } from './util/env';
import { updateSwagger } from './util/swagger';

if (!isMainThread) {
  throw new Error('You are trying to start the server outside the main thread. This is not allowed.');
}

(async () => {
  onShutdown(async function shutdownHook() {
    await app.close();
    Log.warn('Server stopped');
  });

  const app = await createApp();
  Log.info('Created app');

  await app.listen({ port: Env.PORT, host: Env.HOST });
  Log.warn(`Server running on http://localhost:${Env.PORT}/api :)`);

  if (Env.BACKEND_ENV === 'local') {
    Log.info('Updating swagger');
    // @ts-ignore
    await updateSwagger(app);
    Log.info('Swagger updated');
  }

  Log.info('Accepting requests');
  Log.debug(await HealthcheckController.get());
})().catch(Log.error);
