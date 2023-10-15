"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProductsController = exports.SearchClientsController = exports.ProductsController = exports.HealthcheckController = exports.Kita = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
require("@fastify/swagger");
const HealthcheckController = tslib_1.__importStar(require("./routes/healthcheck"));
const ProductsController = tslib_1.__importStar(require("./routes/products"));
const SearchClientsController = tslib_1.__importStar(require("./routes/search/clients"));
const SearchProductsController = tslib_1.__importStar(require("./routes/search/products"));
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
        $id: "ProductsControllerGetResponse",
        type: "array",
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                },
                name: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                images: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                            },
                            url: {
                                type: "string",
                            },
                        },
                        required: ["id", "url"],
                        additionalProperties: false,
                    },
                },
            },
            required: ["id", "name", "price", "images"],
            additionalProperties: false,
        },
    });
    fastify.addSchema({
        $id: "SearchClientsControllerPostResponse",
        type: "array",
        items: {
            type: "object",
            properties: {
                id: {
                    type: "number",
                },
                name: {
                    type: "string",
                },
            },
            required: ["id", "name"],
            additionalProperties: false,
        },
    });
    fastify.addSchema({
        $id: "SearchProductsControllerPostResponse",
        type: "array",
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                },
                name: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                images: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                            },
                            url: {
                                type: "string",
                            },
                        },
                        required: ["id", "url"],
                        additionalProperties: false,
                    },
                },
            },
            required: ["id", "name", "price", "images"],
            additionalProperties: false,
        },
    });
    fastify.addSchema({
        $id: "def-interface--108-159--0-390",
        type: "object",
        properties: {
            search: {
                type: "string",
            },
        },
        required: ["search"],
        additionalProperties: false,
    });
    fastify.addSchema({
        $id: "def-interface--110-161--0-396",
        type: "object",
        properties: {
            search: {
                type: "string",
            },
        },
        required: ["search"],
        additionalProperties: false,
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
    fastify.get("/products", {
        schema: {
            operationId: "products",
            response: {
                "2xx": { $ref: "ProductsControllerGetResponse" },
                "4xx": { $ref: "ErrorResponse" },
                "5xx": { $ref: "ErrorResponse" },
            },
            tags: ["products"],
        },
    }, async (request, reply) => {
        return ProductsController.get();
    });
    fastify.post("/search/clients", {
        schema: {
            operationId: "findClients",
            response: {
                "2xx": { $ref: "SearchClientsControllerPostResponse" },
                "4xx": { $ref: "ErrorResponse" },
                "5xx": { $ref: "ErrorResponse" },
            },
            tags: ["products"],
            body: { $ref: "def-interface--108-159--0-390" },
        },
    }, async (request, reply) => {
        return SearchClientsController.post(request.body);
    });
    fastify.post("/search/products", {
        schema: {
            operationId: "findProducts",
            response: {
                "2xx": { $ref: "SearchProductsControllerPostResponse" },
                "4xx": { $ref: "ErrorResponse" },
                "5xx": { $ref: "ErrorResponse" },
            },
            tags: ["products"],
            body: { $ref: "def-interface--110-161--0-396" },
        },
    }, async (request, reply) => {
        return SearchProductsController.post(request.body);
    });
}, {
    name: "Kita",
    fastify: "4.x",
    encapsulate: true,
});
exports.HealthcheckController = tslib_1.__importStar(require("./routes/healthcheck"));
exports.ProductsController = tslib_1.__importStar(require("./routes/products"));
exports.SearchClientsController = tslib_1.__importStar(require("./routes/search/clients"));
exports.SearchProductsController = tslib_1.__importStar(require("./routes/search/products"));
//# sourceMappingURL=routes.js.map