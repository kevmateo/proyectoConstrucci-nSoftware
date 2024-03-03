export interface AccionesAtributesI {
    id_accion: number;
    siglas_accion: string;
    fecha_compra: Date;
    precio_compra: number;
    cantidad_acciones: number;
    costo_total: number;
    cambio?: number;
    ganancia_perdida?: number;
}

type AccionesCreationAttributesI = Omit<AccionesAtributesI, 'id_accion' | 'cambio' | 'ganancia_perdida' | 'costo_total'>;


