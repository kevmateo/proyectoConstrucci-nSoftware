import acciones from "../db/models/acciones.model";
import { AccionesCreationAttributesI, AccionesAtributesI } from "../../type";

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

    async createAccion(accion: AccionesCreationAttributesI) {
        try {
            return await acciones.create(accion as any);
        } catch (error) {
            throw error;
        }
    }

    async updateAccion(id: number, aerolinea: AccionesCreationAttributesI): Promise<AccionesAtributesI | null> {
        try {
            const accionToUpdate = await acciones.findByPk(id);
            if (accionToUpdate) {
                await acciones.update(aerolinea, {
                    where: {
                        id_accion: id
                    }
                });
                const updatedAerolinea = await acciones.findByPk(id);
                return updatedAerolinea ? updatedAerolinea.toJSON() as AccionesAtributesI : null;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async deleteAccion(id: number): Promise<AccionesAtributesI | null> {
        try {
            const accionesToDelete = await acciones.findByPk(id);

            if (accionesToDelete) {
                await acciones.destroy({
                    where: {
                        id_accion: id
                    }
                });

                return accionesToDelete.toJSON() as AccionesAtributesI;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async deleteAcciones(ids: number[]): Promise<number> {
        try {
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

export default Acciones;