"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const tslib_1 = require("tslib");
const env_schema_1 = tslib_1.__importDefault(require("env-schema"));
const fluent_json_schema_1 = tslib_1.__importDefault(require("fluent-json-schema"));
const path_1 = tslib_1.__importDefault(require("path"));
const schema = fluent_json_schema_1.default.object()
    .prop('LOG_LEVEL', fluent_json_schema_1.default.string().enum(['debug', 'info', 'warn', 'error', 'trace']).default('debug'))
    .prop('VERSION', fluent_json_schema_1.default.string().default('latest'))
    .prop('BASE_PATH', fluent_json_schema_1.default.string().default('/api'))
    .prop('HOST', fluent_json_schema_1.default.string().default('0.0.0.0'))
    .prop('PORT', fluent_json_schema_1.default.number().default(4000))
    .prop('JWT_TOKEN_EXPIRES', fluent_json_schema_1.default.number().default(60 * 60 * 24))
    .prop('JWT_REFRESH_EXPIRES', fluent_json_schema_1.default.number().default(60 * 60 * 24 * 7))
    .prop('PUBLIC_PATH', fluent_json_schema_1.default.string().default(path_1.default.resolve(__dirname, '../../public')))
    .prop('BACKEND_ENV', fluent_json_schema_1.default.string().default('local'))
    .valueOf();
exports.Env = (0, env_schema_1.default)({
    dotenv: true,
    schema
});
//# sourceMappingURL=env.js.map