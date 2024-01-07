import React from "react";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

function AgregarAccion(props) {

  const [nombreAccion, setNombreAccion] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [precioCompraAccion, setPrecioCompraAccion] = useState('');
  const [cantidadAccion, setCantidadAccion] = useState('');

  const hanlderCerrarAgregarAccion = () => {
    props.hanlderCerrarAgregarAccion();
  }

  const handlerAgregarAccion = () => {
    
    const datos = {
      siglas_accion: nombreAccion,
      fecha_compra: fechaCompra,
      precio_compra: precioCompraAccion,
      cantidad_acciones: cantidadAccion,
      costo_total: precioCompraAccion * cantidadAccion
    }
    
    fetch('http://26.255.120.45:3000/api/v1/acciones' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Error al traer las acciones');
      }
    })
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <Form.Control
            type="text"
            placeholder="Nombre de la acción"
            onChange={(e) => setNombreAccion(e.target.value)}
          />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Form.Control
            type="date"
            placeholder="Fecha de compra"
            onChange={(e) => setFechaCompra(e.target.value)}
          />
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Form.Control
            type="number"
            placeholder="Precio de compra"
            onChange={(e) => setPrecioCompraAccion(e.target.value)}
          />  
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control
            type="number"
            placeholder="Cantidad"
            onChange={(e) => setCantidadAccion(e.target.value)}
          />  
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control
            type="number"
            placeholder="Precio"
            inputMode="decimal"
            readOnly
            value={precioCompraAccion * cantidadAccion}
          />
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Agregar
        </Button>
        <Button variant="danger" className="ms-2" onClick={hanlderCerrarAgregarAccion}>Cancelar</Button>
      </Card.Footer>
    </Card>
  );
}

export default AgregarAccion;