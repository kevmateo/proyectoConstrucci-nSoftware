import { useState, useEffect } from 'react';
import './App.css';
import Acciones from './componentes/acciones';
import Acciones2 from './componentes/accionesVista2';
import PanelControl from './componentes/panelControl';
import Button from 'react-bootstrap/esm/Button';
import AgregarAccion from './componentes/agregarAccion';

function App() {

  const [acciones, setAcciones] = useState([]);
  const [accionesAuxiliares, setAccionesAuxiliares] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [mostrarAgregarAccion, setMostrarAgregarAccion] = useState(false);
  const [vistaTabla, setVistaTabla] = useState(true);

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
        data.sort((a, b) => b.id_accion - a.id_accion);
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

  const handlerAbrirAgregarAccion = () => {
    setMostrarAgregarAccion(true);
  }

  const hanlderCerrarAgregarAccion = () => {
    setMostrarAgregarAccion(false);
  }

  const handlerCambiarVista = () => {
    setVistaTabla(!vistaTabla);
  }

  return (
    <>
      <header>
        <PanelControl
          handlerBuscarAcciones={handlerBuscarAcciones}
          handlerCambiarVista={handlerCambiarVista}
          vistaTabla={vistaTabla}
        />
      </header>
      <div className="contenedor-botones">
        <Button variant="outline-success" onClick={handlerAbrirAgregarAccion} >Agregar Acción</Button>
      </div>
      <div className="contenedor-acciones">
        {mostrarAgregarAccion && (
          <div className='overlay'>
            <AgregarAccion
              hanlderCerrarAgregarAccion={hanlderCerrarAgregarAccion}
              handlerTraerAcciones={handlerTraerAcciones}
            />
          </div>
        )}
        {vistaTabla ? (
          accionesAuxiliares.map((accion, index) => (
            <Acciones
              key={index}
              nombreAccion={accion.siglas_accion}
              fechaCompra={accion.fecha_compra}
              precioCompraAccion={accion.precio_compra}
              cantidadAccion={accion.cantidad_acciones}
              precioAccion={accion.costo_total}
            />
          ))
        ) : (
            <Acciones2 acciones={accionesAuxiliares} />
        )}
      </div>
    </>
  );
}

export default App;
