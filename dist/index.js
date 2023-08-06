"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
let lista = [
    {
        id: (0, uuid_1.v4)(),
        nome: '',
        age: 0,
        email: '',
        profile: {
            type: '',
            credit: 0,
            busines: '',
        },
    },
];
// cadastrando usuario
app.post('/cadastrando', (req, res) => {
    const { nome, age, email, profile } = req.body;
    if (!nome || !age || !email || !profile || !profile.type || !profile.credit || !profile.busines) {
        return res.status(400).json({ error: 'Erro no cadastro. Todos os campos são obrigatórios.' });
    }
    const newid = {
        id: (0, uuid_1.v4)(),
        nome,
        age,
        email,
        profile: {
            type: profile.type,
            credit: profile.credit,
            busines: profile.busines,
        },
    };
    lista.push(newid);
    res.json(newid);
});
// listando usuarios
app.get('/listando', (req, res) => {
    res.json(lista);
});
app.listen(3000, () => {
    console.log('SERVER RUN:3000');
});
