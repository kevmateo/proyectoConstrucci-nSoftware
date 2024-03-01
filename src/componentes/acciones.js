import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Acciones(props) {

  const [accionSeleccionada, setAccionSeleccionada] = useState(false);

  const hanlderAccionSeleccionada = () => {
    if (props.modeEliminar) {
      props.handlerSeleccionarAccion(props.id_accion);
      setAccionSeleccionada(!accionSeleccionada);
    }
  }

  useEffect(() => {
    setAccionSeleccionada(false);
  }, [props.modeEliminar]);

  return (
    <Card
      data-bs-theme={props.darkMode ? 'dark' : 'light'}
      style={{ width: '18rem', border: accionSeleccionada ? '2px solid #BB2D3B' : '', cursor: props.modeEliminar ? 'pointer' : '' }}
      onClick={hanlderAccionSeleccionada}
    >
      <Card.Body>
        <Card.Title>{props.nombreAccion}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.fechaCompra}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Precio de compra:</strong> {props.precioCompraAccion}</ListGroup.Item>
        <ListGroup.Item><strong>Cantidad:</strong> {props.cantidadAccion}</ListGroup.Item>
        <ListGroup.Item><strong>Precio Total:</strong> {props.precioAccion}</ListGroup.Item>
        <ListGroup.Item><strong>Cambio:</strong> {props.cambio}</ListGroup.Item>
        <ListGroup.Item><strong>Ganancia y Perdida:</strong> {props.ganancia_perdidas}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Acciones;