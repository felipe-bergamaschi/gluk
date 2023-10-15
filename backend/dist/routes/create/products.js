"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const products_1 = require("../services/mock/products");
async function get() {
    return products_1.products;
}
exports.get = get;
//# sourceMappingURL=products.js.map