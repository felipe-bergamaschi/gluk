"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const logger_1 = require("./logger");
const routes_1 = require("./routes");
const env_1 = require("./util/env");
const ajv_formats_1 = tslib_1.__importDefault(require("ajv-formats"));
const { version } = require('../package.json');
async function createApp() {
    const app = (0, fastify_1.default)({
        ignoreTrailingSlash: true,
        logger: logger_1.Log.child({ name: 'Fastify' }),
        disableRequestLogging: true,
        ajv: {
            plugins: [ajv_formats_1.default],
            customOptions: {
                removeAdditional: 'all',
                allowUnionTypes: true
            }
        },
        serializerOpts: {
            ajv: {
                allowUnionTypes: true,
                strictNumbers: 'log'
            }
        },
    });
    await app.register(await Promise.resolve().then(() => tslib_1.__importStar(require('@fastify/cors'))), {
        prefix: env_1.Env.BASE_PATH
    });
    await app.register(await Promise.resolve().then(() => tslib_1.__importStar(require('@fastify/swagger'))), {
        mode: 'dynamic',
        prefix: env_1.Env.BASE_PATH,
        openapi: {
            openapi: '3.1.0',
            info: {
                contact: {
                    name: 'Vou de motinha',
                    email: 'voudemotinha@midisoft.com.br'
                },
                title: 'Vou de motinha',
                version,
                description: 'A complete REST API for Vou de motinha',
                license: {
                    name: 'LICENSED',
                    identifier: 'LICENSED'
                }
            },
            servers: [{ url: `http://${env_1.Env.HOST}:${env_1.Env.PORT}${env_1.Env.BASE_PATH}` }],
            components: {
                securitySchemes: {
                    default: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header'
                    }
                }
            }
        },
        refResolver: {
            buildLocalReference: (json, _, __, i) => json.$id || json.$title || json.name || `def-${i}`
        }
    });
    await app.addSchema({
        $id: 'ErrorResponse',
        type: 'object',
        properties: {
            statusCode: { type: 'number' },
            message: { type: 'string' },
            error: {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            clientVersion: { type: 'null' }
                        },
                        additionalProperties: true
                    },
                    { type: 'string' }
                ]
            }
        },
        required: ['statusCode', 'message'],
        additionalProperties: true
    });
    await app.register(routes_1.Kita, {
        prefix: env_1.Env.BASE_PATH
    });
    return app;
}
exports.createApp = createApp;
//# sourceMappingURL=app.js.map