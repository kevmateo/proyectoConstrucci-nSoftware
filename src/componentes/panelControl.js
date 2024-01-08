import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { TfiViewListAlt, TfiViewGrid  } from "react-icons/tfi";

function PanelControl(props) {

  const [capturarTexto, setCapturarTexto] = useState('');

  const handlerCapturarTexto = (e) => {
    setCapturarTexto(e.target.value);
    props.handlerBuscarAcciones(e);
  }

  const handlerCambiarVista = () => {
    props.handlerCambiarVista();
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Proyecto Construcción</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#action3">About us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              value={capturarTexto}
              onChange={handlerCapturarTexto}
            />
            <button
              type="button"
              style={{
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                fontSize: '20px', 
                padding: '1px',
                cursor: 'pointer',
              }}
              onClick={handlerCambiarVista}
            >
              {props.vistaTabla ?  <TfiViewListAlt /> : <TfiViewGrid />}
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PanelControl;