"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const products_1 = require("../../services/mock/products");
async function post(dto) {
    const regex = new RegExp(dto.search, 'i');
    return products_1.products.filter((product) => regex.test(product.name));
}
exports.post = post;
//# sourceMappingURL=products.js.map