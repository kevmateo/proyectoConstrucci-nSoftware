import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Acciones(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.nombreAccion}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.fechaCompra}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Precio de compra:</strong> {props.precioCompraAccion}</ListGroup.Item>
        <ListGroup.Item><strong>Cantidad:</strong> {props.cantidadAccion}</ListGroup.Item>
        <ListGroup.Item><strong>Precio Total:</strong> {props.precioAccion}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Acciones;