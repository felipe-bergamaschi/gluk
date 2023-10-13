"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformSchema = exports.resolver = void 0;
const throw_1 = require("../util/error/throw");
const swagger_1 = require("../util/swagger");
require("@fastify/jwt");
async function resolver(req, _, ignoreExpiration = false) {
    if (!req.user) {
        try {
            await req.jwtVerify({ ignoreExpiration });
        }
        catch (error) {
            throw new throw_1.KnownError('InvalidLogin', error.message);
        }
    }
    return req.user;
}
exports.resolver = resolver;
function transformSchema(schema, _ignoreExpiration) {
    (0, swagger_1.mergeSchemaHeaders)(schema, 'authorization', 'string', {
        format: 'regex',
        pattern: '^Bearer .+$'
    });
    {
        schema.security ?? (schema.security = []);
        schema.security.push({ default: [] });
    }
    return schema;
}
exports.transformSchema = transformSchema;
//# sourceMappingURL=authorized.js.map