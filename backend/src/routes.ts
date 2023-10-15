// This file contains hardcoded paths to controllers ans schemas.
// It should be in your .gitignore and NOT be committed to source control.

import type {
  RouteContext,
  ProvidedRouteContext,
  KitaConfig,
} from "@kitajs/runtime";
import fp from "fastify-plugin";
import "@fastify/swagger";
//@ts-ignore - we may have import type errors
import * as HealthcheckController from "./routes/healthcheck";
//@ts-ignore - we may have import type errors
import * as ProductsController from "./routes/products";
//@ts-ignore - we may have import type errors
import * as SearchClientsController from "./routes/search/clients";
//@ts-ignore - we may have import type errors
import * as SearchProductsController from "./routes/search/products";

/**
 * The Kita generated fastify plugin. Registering it into your fastify instance will
 * automatically register all routes, schemas and controllers.
 *
 * @example
 * ```ts
 * import { Kita } from './routes'; // this file
 * import app from './fastify-app';
 *
 * app.register(Kita, { context: { ... } })
 * ```
 */
export const Kita = fp<{}>(
  //@ts-ignore - options may not be used
  async (fastify, options) => {
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

    fastify.get(
      "/healthcheck",
      {
        schema: {
          operationId: "healthCheck",
          response: {
            "2xx": { $ref: "HealthcheckControllerGetResponse" },
            "4xx": { $ref: "ErrorResponse" },
            "5xx": { $ref: "ErrorResponse" },
          },
          tags: ["X-HIDDEN"],
        },
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return HealthcheckController.get();
      }
    );

    fastify.get(
      "/products",
      {
        schema: {
          operationId: "products",
          response: {
            "2xx": { $ref: "ProductsControllerGetResponse" },
            "4xx": { $ref: "ErrorResponse" },
            "5xx": { $ref: "ErrorResponse" },
          },
          tags: ["products"],
        },
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return ProductsController.get();
      }
    );

    fastify.post(
      "/search/clients",
      {
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
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return SearchClientsController.post(
          request.body as Parameters<typeof SearchClientsController.post>[0]
        );
      }
    );

    fastify.post(
      "/search/products",
      {
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
      },
      //@ts-ignore - we may have unused params
      async (request, reply) => {
        return SearchProductsController.post(
          request.body as Parameters<typeof SearchProductsController.post>[0]
        );
      }
    );
  },
  {
    name: "Kita",
    fastify: "4.x",
    // Ensure prefixes are applied to all routes
    encapsulate: true,
  }
);

export * as HealthcheckController from "./routes/healthcheck";
export * as ProductsController from "./routes/products";
export * as SearchClientsController from "./routes/search/clients";
export * as SearchProductsController from "./routes/search/products";
