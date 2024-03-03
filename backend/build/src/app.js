"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const acciones_route_1 = __importDefault(require("./routes/acciones.route"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api/v1/', acciones_route_1.default);
exports.default = app;
