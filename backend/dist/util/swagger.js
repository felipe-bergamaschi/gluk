"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSchemaHeaders = exports.updateSwagger = void 0;
const promises_1 = require("fs/promises");
async function updateSwagger(app) {
    const swagger = JSON.stringify(app.swagger(), null, 2);
    try {
        const current = await (0, promises_1.readFile)('./swagger.json', 'utf-8');
        if (current === swagger) {
            return;
        }
    }
    catch { }
    await (0, promises_1.writeFile)('./swagger.json', swagger);
}
exports.updateSwagger = updateSwagger;
function mergeSchemaHeaders(schema, headerName, headerType, options = {}) {
    const headers = (schema.headers ?? (schema.headers = {}));
    headers.$id ?? (headers.$id = `${schema.operationId}Headers`);
    headers.properties ?? (headers.properties = {});
    headers.required ?? (headers.required = []);
    headers.type = 'object';
    headers.properties[headerName] = { type: headerType, ...options };
}
exports.mergeSchemaHeaders = mergeSchemaHeaders;
//# sourceMappingURL=swagger.js.map