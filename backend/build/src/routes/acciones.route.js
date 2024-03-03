"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const acciones_service_1 = __importDefault(require("../services/acciones.service"));
const router = express_1.default.Router();
const acc = new acciones_service_1.default();
router.get('/acciones/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id) {
            const accion = yield acc.getAccion(Number(id));
            res.json(accion);
        }
        else {
            const acciones = yield acc.getAcciones();
            res.json(acciones);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
router.post('/acciones', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newAccion = yield acc.createAccion(body);
        res.status(201).json(newAccion);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
router.put('/acciones/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAccion = yield acc.updateAccion(Number(req.params.id), req.body);
        res.status(200).json(updatedAccion);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
router.delete('/acciones/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield acc.deleteAccion(Number(req.params.id));
        res.status(200).json({ message: 'Accion deleted successfully' });
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
exports.default = router;
