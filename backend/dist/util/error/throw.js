"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownError = void 0;
const http_status_1 = require("../http-status");
const enum_1 = require("./enum");
class KnownError extends Error {
    constructor(message, error) {
        super(message);
        this.message = message;
        this.error = error;
        this.statusCode = http_status_1.StatusCode[enum_1.ErrorCode[message]];
    }
}
exports.KnownError = KnownError;
//# sourceMappingURL=throw.js.map