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
const acciones_model_1 = __importDefault(require("../db/models/acciones.model"));
class Acciones {
    getAcciones() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accionesList = yield acciones_model_1.default.findAll();
                return accionesList.map((aerolinea) => aerolinea.toJSON());
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAccion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accion = yield acciones_model_1.default.findByPk(id);
                return accion ? accion.toJSON() : null;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createAccion(accion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield acciones_model_1.default.create(accion);
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateAccion(id, aerolinea) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accionToUpdate = yield acciones_model_1.default.findByPk(id);
                if (accionToUpdate) {
                    yield acciones_model_1.default.update(aerolinea, {
                        where: {
                            id_accion: id
                        }
                    });
                    const updatedAerolinea = yield acciones_model_1.default.findByPk(id);
                    return updatedAerolinea ? updatedAerolinea.toJSON() : null;
                }
                return null;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteAccion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accionesToDelete = yield acciones_model_1.default.findByPk(id);
                if (accionesToDelete) {
                    yield acciones_model_1.default.destroy({
                        where: {
                            id_accion: id
                        }
                    });
                    return accionesToDelete.toJSON();
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Acciones;
