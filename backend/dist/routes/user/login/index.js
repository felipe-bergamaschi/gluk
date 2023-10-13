"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const auth_1 = require("../../../services/auth");
const env_1 = require("../../../util/env");
const throw_1 = require("../../../util/error/throw");
const argon2_1 = require("argon2");
const client_1 = require("../../../db/client");
async function post(data, fastify) {
    const { email, password } = data;
    const user = await client_1.PRISMA.user.findFirstOrThrow({
        where: {
            email: email.toLowerCase().trim()
        },
    });
    const passwordCompare = user.password ? await (0, argon2_1.verify)(user.password, password) : false;
    if (!passwordCompare) {
        throw new throw_1.KnownError('InvalidLogin');
    }
    const { refresh, token } = (0, auth_1.createTokens)(fastify.jwt, user.id, user.name, user.email, user.document, user.phone);
    user.password = '';
    return {
        token,
        refresh,
        user,
        expiresAt: Date.now() + env_1.Env.JWT_TOKEN_EXPIRES * 1000
    };
}
exports.post = post;
//# sourceMappingURL=index.js.map