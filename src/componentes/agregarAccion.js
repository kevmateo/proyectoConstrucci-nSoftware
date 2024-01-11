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

  const handlerActualizarLanding = () => {
    props.handlerTraerAcciones();
  }

  const handlerAgregarAccion = () => {

    const datos = {
      siglas_accion: nombreAccion,
      fecha_compra: fechaCompra,
      precio_compra: precioCompraAccion,
      cantidad_acciones: cantidadAccion,
      costo_total: precioCompraAccion * cantidadAccion
    }

    fetch('http://26.240.184.51:3000/api/v1/acciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Accion agregada');
          hanlderCerrarAgregarAccion();
          handlerActualizarLanding();
          return response.json();
        } else {
          console.log('Error al traer las acciones');
          console.log(response.json());
        }
      })
  }

  return (
    <Card data-bs-theme={props.darkMode ? 'dark' : 'light'} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          <Form.Control
            type="text"
            placeholder="Nombre de la acción"
            value={nombreAccion}
            onChange={(e) => setNombreAccion(e.target.value)}
          />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Form.Control
            type="date"
            placeholder="Fecha de compra"
            value={fechaCompra}
            onChange={(e) => setFechaCompra(e.target.value)}
          />
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Form.Control
            type="text"
            placeholder="Precio de compra"
            value={precioCompraAccion}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/[^0-9.]/g, '');
              setPrecioCompraAccion(onlyNumbers);
            }}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control
            type="text"
            placeholder="Cantidad"
            value={cantidadAccion}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
              setCantidadAccion(onlyNumbers);
            }}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control
            type="number"
            placeholder="Precio"
            inputMode="numeric"
            readOnly
            value={precioCompraAccion * cantidadAccion}
          />
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex justify-content-center">
        <Button variant="primary" type="submit" onClick={handlerAgregarAccion}>
          Agregar
        </Button>
        <Button variant="danger" className="ms-2" onClick={hanlderCerrarAgregarAccion}>Cancelar</Button>
      </Card.Footer>
    </Card>
  );
}

export default AgregarAccion;