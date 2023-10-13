"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokens = exports.formatAuthUser = exports.extractToken = void 0;
const env_1 = require("../util/env");
const BEARER_LENGTH = 'Bearer '.length;
function extractToken(req) {
    return (req.headers.authorization?.substring(BEARER_LENGTH) ||
        req.query.tk1);
}
exports.extractToken = extractToken;
function formatAuthUser(user) {
    return {
        userId: user.userId,
        username: user.username,
        email: user.email,
        document: user.document,
        phone: user.phone
    };
}
exports.formatAuthUser = formatAuthUser;
function createTokens(jwt, userId, username, email, document, phone) {
    return {
        token: jwt.sign({ userId, username, email, document, phone, type: 'token' }, { expiresIn: env_1.Env.JWT_TOKEN_EXPIRES }),
        refresh: jwt.sign({ userId, username, email, document, phone, type: 'refresh' }, { expiresIn: env_1.Env.JWT_REFRESH_EXPIRES })
    };
}
exports.createTokens = createTokens;
//# sourceMappingURL=auth.js.map