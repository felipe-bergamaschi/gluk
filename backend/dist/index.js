"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const worker_threads_1 = require("worker_threads");
const close_with_grace_1 = tslib_1.__importDefault(require("close-with-grace"));
const routes_1 = require("./routes");
const app_1 = require("./app");
const logger_1 = require("./logger");
const env_1 = require("./util/env");
const swagger_1 = require("./util/swagger");
if (!worker_threads_1.isMainThread) {
    throw new Error('You are trying to start the server outside the main thread. This is not allowed.');
}
(async () => {
    (0, close_with_grace_1.default)(async function shutdownHook() {
        await app.close();
        logger_1.Log.warn('Server stopped');
    });
    const app = await (0, app_1.createApp)();
    logger_1.Log.info('Created app');
    await app.listen({ port: env_1.Env.PORT, host: env_1.Env.HOST });
    logger_1.Log.warn(`Server running on http://localhost:${env_1.Env.PORT}/api :)`);
    if (env_1.Env.BACKEND_ENV === 'local') {
        logger_1.Log.info('Updating swagger');
        await (0, swagger_1.updateSwagger)(app);
        logger_1.Log.info('Swagger updated');
    }
    logger_1.Log.info('Accepting requests');
    logger_1.Log.debug(await routes_1.HealthcheckController.get());
})().catch(logger_1.Log.error);
//# sourceMappingURL=index.js.map