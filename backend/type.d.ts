export interface AccionesAtributesI {
    id_accion: number;
    siglas_accion: string;
    fecha_compra: Date;
    precio_compra: number;
    cantidad_acciones: number;
    costo_total: number;
}

export interface AccionesCreationAttributesI {
    siglas_accion: string;
    fecha_compra: Date;
    precio_compra: number;
    cantidad_acciones: number;
    costo_total: number;
}

// definir un tipo
export type a = {
    siglas_accion: "AMZN"|| "AAPL" || "GOOGL" || "FB" || "MSFT" || "TSLA";
}

