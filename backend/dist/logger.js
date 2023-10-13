"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const pino_1 = tslib_1.__importDefault(require("pino"));
const worker_threads_1 = require("worker_threads");
const env_1 = require("./util/env");
function getOutPath(...paths) {
    return path_1.default.resolve(__dirname, '../out', new Date().toLocaleDateString('en-ZA'), ...paths);
}
let logger = (0, pino_1.default)({
    level: env_1.Env.LOG_LEVEL,
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
                level: env_1.Env.LOG_LEVEL,
                options: {
                    translateTime: 'SYS:HH:MM:ss.l',
                    colorize: true,
                    levelFirst: true,
                    ignore: 'pid,hostname'
                }
            }
        ]
    }
}).child({ name: worker_threads_1.isMainThread ? 'Kawasaki' : 'Kawasaki Worker' });
for (const [key, value] of Object.entries(logger)) {
    typeof value === 'function' && (logger[key] = logger[key].bind(logger));
}
exports.Log = logger;
//# sourceMappingURL=logger.js.map