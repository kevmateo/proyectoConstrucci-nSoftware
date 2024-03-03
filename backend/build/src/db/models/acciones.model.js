"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const acciones_db_1 = __importDefault(require("../acciones.db"));
const Acciones = acciones_db_1.default.define('acciones', {
    id_accion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    siglas_accion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_compra: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    precio_compra: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    cantidad_acciones: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    costo_total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = Acciones;
