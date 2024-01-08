import React from "react";
import Table from 'react-bootstrap/Table';

function accionesVista2(props) {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Compra</th>
          <th>Precio de Compra</th>
          <th>Cantidad</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        {props.acciones.map((accion, index) => (
          <tr key={index}>
            <td>{accion.siglas_accion}</td>
            <td>{accion.fecha_compra}</td>
            <td>{accion.precio_compra}</td>
            <td>{accion.cantidad_acciones}</td>
            <td>{accion.costo_total}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default accionesVista2;