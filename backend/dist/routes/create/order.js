"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const fs = require('fs');
const path = require('path');
async function get() {
    const filePath = path.join(__dirname, '../../db/order.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo JSON:', err);
            return;
        }
        const jsonData = JSON.parse(data);
        const novoObjeto = {
            nome: 'NovoNome',
            id: 1234
        };
        jsonData.push(novoObjeto);
        const novoJSON = JSON.stringify(jsonData, null, 2);
        console.log({ novoJSON });
    });
    return filePath;
}
exports.get = get;
//# sourceMappingURL=order.js.map