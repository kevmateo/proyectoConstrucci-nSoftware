import acciones from "../db/models/acciones.model";
import { AccionesCreationAttributesI, AccionesAtributesI } from "../../type";
import { socket, unsubscribe, subscribe } from '../api/api.acciones';

class Acciones {
    async getAcciones(): Promise<AccionesAtributesI[]> {
        try {
            const accionesList = await acciones.findAll();
            return accionesList.map((aerolinea) => aerolinea.toJSON()) as AccionesAtributesI[];
        } catch (error) {
            throw error;
        }
    }

    async getAccion(id: number): Promise<AccionesAtributesI | null> {
        try {
            const accion = await acciones.findByPk(id);
            return accion ? accion.toJSON() as AccionesAtributesI : null;
        } catch (error) {
            throw error;
        }
    }

    async createAccion(accion: AccionesCreationAttributesI): Promise<AccionesAtributesI> {
        try {

            const costoTotal = accion.precio_compra * accion.cantidad_acciones;
            const nuevaAccion = {
                ...accion,
                costo_total: costoTotal,

            };
            subscribe(nuevaAccion.siglas_accion);

            return await acciones.create(nuevaAccion) as any as AccionesAtributesI;

        } catch (error) {
            throw error;
        }
    }

    async updateAccion(id: number, accion: AccionesCreationAttributesI): Promise<AccionesAtributesI | null> {
        try {
            const accionToUpdate = await acciones.findByPk(id);

            if (accionToUpdate) {

                const costoTotal = accion.precio_compra * accion.cantidad_acciones;

                const nuevaAccion = {
                    ...accion,
                    costo_total: costoTotal,
                };

                await acciones.update(nuevaAccion, {
                    where: {
                        id_accion: id
                    }
                });

                const updatedAccion = await acciones.findByPk(id);
                return updatedAccion ? updatedAccion.toJSON() as AccionesAtributesI : null;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async deleteAccion(id: number): Promise<AccionesAtributesI | null> {
        try {
            const accionesToDelete = await acciones.findByPk(id) as any as AccionesAtributesI;

            if (accionesToDelete) {
                //unsubscribe(accionesToDelete.siglas_accion);
                await acciones.destroy({
                    where: {
                        id_accion: id
                    }
                });

                return accionesToDelete;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async deleteAcciones(ids: number[]): Promise<number> {
        try {
            const accionesToDelete: AccionesAtributesI[] = (await acciones.findAll({
                where: {
                    id_accion: ids
                }
            })).map((accion) => accion.toJSON()) as AccionesAtributesI[];

            const siglasAcciones = accionesToDelete.map((accion) => accion.siglas_accion);
           // siglasAcciones.forEach((siglas) => unsubscribe(siglas));

            const deletedAcciones = await acciones.destroy({
                where: {
                    id_accion: ids
                }
            });

            return deletedAcciones;
        } catch (error) {
            throw error;
        }
    }
}

export default new Acciones();