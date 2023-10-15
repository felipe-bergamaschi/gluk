"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const clients_1 = require("../../services/mock/clients");
async function post(dto) {
    const regex = new RegExp(dto.search, 'i');
    return clients_1.clients.filter((client) => regex.test(client.name));
}
exports.post = post;
//# sourceMappingURL=clients.js.map