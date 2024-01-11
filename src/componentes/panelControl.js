import React from "react";
import './panelControl.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import LogoDark from '../imagenes/logo-dark.png';

function PanelControl(props) {

  const [capturarTexto, setCapturarTexto] = useState('');

  const handlerCapturarTexto = (e) => {
    setCapturarTexto(e.target.value);
    props.handlerBuscarAcciones(e);
  }

  const handlerCambiarVista = () => {
    props.handlerCambiarVista();
  }

  const handlerToggleDarkMode = () => {
    props.toggleDarkMode();
  }

  return (
    <Navbar data-bs-theme={props.darkMode ? 'dark' : 'light'} collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >
          <img
            alt=""
            src={LogoDark}
            width={70}
            height={60}
          />
          Proyecto Construcción
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
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
                marginLeft: '10px'
              }}
              onClick={handlerCambiarVista}
            >
              {props.vistaTabla ? <TfiViewListAlt className="icono-cambiar-vista" /> : <TfiViewGrid className="icono-cambiar-vista" />}
            </button>
            <button
              type="button"
              style={{
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                fontSize: '30px',
                padding: '1px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
              onClick={handlerToggleDarkMode}
            >
              {props.darkMode ? <MdDarkMode className="icono-dark-mode" /> : <CiLight className="icono-dark-mode" />}
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PanelControl;