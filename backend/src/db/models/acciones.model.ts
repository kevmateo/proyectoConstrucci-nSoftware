
import { Model, DataTypes } from 'sequelize';
import sequelize from '../acciones.db';
import { AccionesAtributesI, AccionesCreationAttributesI } from '../../../type';

const Acciones = sequelize.define<Model<AccionesAtributesI, AccionesCreationAttributesI>>('acciones', {
    id_accion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    siglas_accion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    precio_compra: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cantidad_acciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    costo_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

}, {
    timestamps: false,
});

export default Acciones;