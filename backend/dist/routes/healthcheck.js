"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const env_1 = require("../util/env");
async function get() {
    return {
        status: 'ok',
        version: env_1.Env.VERSION,
        uptime: Math.floor(process.uptime()),
    };
}
exports.get = get;
//# sourceMappingURL=healthcheck.js.map