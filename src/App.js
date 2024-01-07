import { useState, useEffect } from 'react';
import './App.css';
import Acciones from './componentes/acciones';
import PanelControl from './componentes/panelControl';
import Button from 'react-bootstrap/esm/Button';
import AgregarAccion from './componentes/agregarAccion';

function App() {

  const [acciones, setAcciones] = useState([]);
  const [accionesAuxiliares, setAccionesAuxiliares] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [mostrarAgregarAccion, setMostrarAgregarAccion] = useState(false);

  const handlerTraerAcciones = () => {
    fetch('http://26.240.184.51:3000/api/v1/acciones', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error al traer las acciones');
        }
      })
      .then((data) => {
        setAcciones(data);
        setAccionesAuxiliares(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    handlerTraerAcciones();
  }, []);

  const handlerBuscarAcciones = (e) => {
    const texto = e.target.value;
    setFiltroNombre(texto);
    const accionesFiltradas = acciones.filter((accion) => accion.siglas_accion.toLowerCase().includes(texto.toLowerCase()));
    setAccionesAuxiliares(accionesFiltradas);
  }

  const handlerAgregarAccion = () => {
    setMostrarAgregarAccion(true);
  }

  const hanlderCerrarAgregarAccion = () => {
    setMostrarAgregarAccion(false);
  }

  return (
    <>
      <header>
        <PanelControl 
          handlerBuscarAcciones={handlerBuscarAcciones}
        />
      </header>
      <div className="contenedor-botones">
        <Button variant="outline-success" onClick={handlerAgregarAccion} >Agregar</Button>
      </div>
      <div className="contenedor-acciones">
        {mostrarAgregarAccion && (
          <AgregarAccion 
            hanlderCerrarAgregarAccion={hanlderCerrarAgregarAccion}
          />
        )}
        {accionesAuxiliares.map((accion, index) => (
          <Acciones
            key={index}
            nombreAccion={accion.siglas_accion}
            fechaCompra={accion.fecha_compra}
            precioCompraAccion={accion.precio_compra}
            cantidadAccion={accion.cantidad_acciones}
            precioAccion={accion.costo_total}
          />
        ))}
      </div>
    </>
  );
}

export default App;
