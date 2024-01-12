import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function AccionesVista2({ darkMode, acciones, handlerFilaSeleccionada, modeEliminar }) {

  const [filasSeleccionadas, setFilasSeleccionadas] = useState([]);

  const handlerFilaSeleccionadaV2 = (id_accion) => {
    if (modeEliminar) {
      setFilasSeleccionadas(prevFilasSeleccionadas => {
        const nuevasFilasSeleccionadas = prevFilasSeleccionadas.includes(id_accion)
          ? prevFilasSeleccionadas.filter((fila) => fila !== id_accion)
          : [...prevFilasSeleccionadas, id_accion];
        handlerFilaSeleccionada(nuevasFilasSeleccionadas);
        return nuevasFilasSeleccionadas;
      });
    }
  };

  useEffect(() => {
    setFilasSeleccionadas([]);
    handlerFilaSeleccionada([]);
  }, [modeEliminar]);

  return (
    <Table data-bs-theme={darkMode ? 'dark' : 'light'} striped bordered hover>
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
        {acciones.map((accion, index) => (
          <tr
            key={index}
            id_accion={accion.id_accion}
            onClick={() => handlerFilaSeleccionadaV2(accion.id_accion)}
            style={{
              border: filasSeleccionadas.includes(accion.id_accion) ? '2px solid #BB2D3B' : '',
              cursor: modeEliminar ? 'pointer' : ''
            }}
          >
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

export default AccionesVista2;
