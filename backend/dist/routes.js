﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = exports.HealthcheckController = exports.Kita = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
require("@fastify/swagger");
const HealthcheckController = tslib_1.__importStar(require("./routes/healthcheck"));
const UsersController = tslib_1.__importStar(require("./routes/users"));
exports.Kita = (0, fastify_plugin_1.default)(async (fastify, options) => {
    fastify.addSchema({
        $id: "HealthcheckControllerGetResponse",
        type: "object",
        properties: {
            status: {
                type: "string",
            },
            version: {
                type: "string",
            },
            uptime: {
                type: "number",
            },
        },
        required: ["status", "version", "uptime"],
        additionalProperties: false,
    });
    fastify.addSchema({
        $id: "UsersControllerGetResponse",
        type: "array",
        items: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                id: {
                    type: "string",
                },
            },
            required: ["name", "id"],
            additionalProperties: false,
        },
    });
    fastify.get("/healthcheck", {
        schema: {
            operationId: "healthCheck",
            response: {
                "2xx": { $ref: "HealthcheckControllerGetResponse" },
                "4xx": { $ref: "ErrorResponse" },
                "5xx": { $ref: "ErrorResponse" },
            },
            tags: ["X-HIDDEN"],
        },
    }, async (request, reply) => {
        return HealthcheckController.get();
    });
    fastify.get("/users", {
        schema: {
            operationId: "users",
            response: {
                "2xx": { $ref: "UsersControllerGetResponse" },
                "4xx": { $ref: "ErrorResponse" },
                "5xx": { $ref: "ErrorResponse" },
            },
            tags: ["users"],
        },
    }, async (request, reply) => {
        return UsersController.get();
    });
}, {
    name: "Kita",
    fastify: "4.x",
    encapsulate: true,
});
exports.HealthcheckController = tslib_1.__importStar(require("./routes/healthcheck"));
exports.UsersController = tslib_1.__importStar(require("./routes/users"));
//# sourceMappingURL=routes.js.map