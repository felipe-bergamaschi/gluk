"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const client_1 = require("../../../db/client");
const argon2_1 = require("argon2");
async function post(data) {
    await client_1.PRISMA.user.create({
        data: {
            document: data.document,
            email: data.email,
            name: data.name,
            password: await (0, argon2_1.hash)(data.password),
            phone: data.phone
        },
    });
    return true;
}
exports.post = post;
//# sourceMappingURL=index.js.map