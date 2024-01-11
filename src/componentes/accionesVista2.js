import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function AccionesVista2(props, modeEliminar) {
  
  const [filasSeleccionadas, setFilasSeleccionadas] = useState([]);

  const handlerFilaSeleccionada = (id_accion) => {
    if (modeEliminar) {
      const nuevasFilasSeleccionadas = filasSeleccionadas.includes(id_accion)
        ? filasSeleccionadas.filter((fila) => fila !== id_accion)
        : [...filasSeleccionadas, id_accion];
      setFilasSeleccionadas(nuevasFilasSeleccionadas);
      props.handlerFilaSeleccionada(nuevasFilasSeleccionadas);
    }
  }

  useEffect(() => {
    setFilasSeleccionadas([]);
    props.handlerFilaSeleccionada([]);
  }, [modeEliminar]);

  return (
    <Table data-bs-theme={props.darkMode ? 'dark' : 'light'} striped bordered hover>
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
          <tr
            key={index}
            id_accion={accion.id_accion}
            onClick={() => handlerFilaSeleccionada(accion.id_accion)}
            style={{
              border: filasSeleccionadas.includes(accion.id_accion) ? '2px solid green' : '',
              cursor: props.modeEliminar ? 'pointer' : ''
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
