# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

---
## Requerimientos Funcionales

| Código | Requerimiento                                      |
|--------|----------------------------------------------------|
| RFP1   | La aplicación debe permitir al usuario registrar la compra de acciones |
| RFP2   | La aplicación debe permitir al usuario observar una lista de las acciones compradas |
| RFP3   | La aplicación debe permitir buscar con su nombre una acción registrada por el usuario |
| RFP4   | La información que debe mostrarse de las acciones es: el nombre de la acción, fecha de compra, precio de compra por acción, cantidades de acciones y costo total de compra |
| RFP5   | La información que ingresa el usuario al registrar una acción es el nombre de la acción, fecha de compra, precio de compra por acción y cantidades de acciones |
| RFP6   | El costo total de compra cuando el usuario registra una compra de acción se calcula automáticamente |
| RFP7   | La interfaz de usuario debe poderse cambiar a modo oscuro |
| RFP8   | Las acciones registradas también se podrán eliminar del registro |

## Configuración del Proyecto

Para este proyecto se trabajará con la librería React de JavaScript creada por Facebook, react nos permite diseñar e implementar la interface de una aplicación web [1]. Se puede decir que es la V en el patrón MVC (Model, View, Controller) y C es nodesjs.

Para la base de datos se utilizará MySql en un servidor remoto, en el que se conectará la aplicación para obtener e ingresar datos a través de una conexión con la utilización del software Radmin VPN.

También se utilizará una arquitectura basada en componentes, ya que, se estará utilizando la librería de react de JavaScript la cual están basadas en componentes independientes, dinámicos y reutilizables.

## Arquitectura del Software del Sistema

![Arquitectura del software del sistema](link_a_la_imagen)

## Diseño de Base de Datos

![Modelo entidad relación de la base de datos del sistema](link_a_la_imagen)

## Artefactos XP

### Épica 1: Listado de Acciones

#### Historia de Usuario 1: Visualización de la Lista de Acciones

##### Criterios de Aceptación:
- Al iniciar la aplicación, se muestra la lista de acciones con la información necesaria.

#### Historia de Usuario 2: Información de Acciones

##### Criterios de Aceptación:
- Al mostrar el listado de acciones, se presenta el nombre, fecha de compra, precio de compra por acción, cantidades de acciones y costo total de compra.

### Épica 2: Registro de Acciones

#### Historia de Usuario 3: Registrar Acción

##### Criterios de Aceptación:
- Al dar clic en "Agregar Acción", se presenta un formulario para registrar la acción con la información necesaria.

#### Historia de Usuario 4: Cálculo Automático del Costo Total de Compra

##### Criterios de Aceptación:
- Al llenar el formulario de registro de acción y dar clic en "Agregar", se muestra en la lista de acciones la información completa.

### Épica 3: Búsqueda y Eliminación de Acciones

#### Historia de Usuario 5: Búsqueda de Acciones por Nombre

##### Criterios de Aceptación:
- Al ingresar el nombre de una acción en el buscador, se muestra la acción con ese nombre si existe.

#### Historia de Usuario 6: Eliminar Acciones

##### Criterios de Aceptación:
- Al seleccionar las acciones a eliminar y presionar el botón "Eliminar", estas ya no se mostrarán en el listado de acciones.

## Eventos XP

### Planificación del Reléase

Objetivo del Reléase: Automatizar en un 75% la administración de las acciones compradas por el usuario.

#### Selección de Historias de Usuario

1. Registrar Acción
2. Cálculo de Costo Total de Compra
3. Eliminar Acción Registrada
4. Listado de Acciones
5. Información de Acciones
6. Búsqueda de Acciones por Nombre
7. Cambiar de Modo de Visualización a Dark.

### Iteración 1

#### Objetivo: Permitir al usuario registrar sus acciones compradas.

##### Historia de Usuario 1: Registrar Acción

###### Tareas:
- Crear la base de datos. (Estimado: 1 hora)
- Conectar la base de datos. (Estimado: 1 hora)
- Poner un botón “Agregar Acción”. (Estimado: 0.5 hora)
- Crear el formulario de registro. (Estimado: 2 horas)
- Crear la sentencia en la base de datos. (Estimado: 0.5 hora)
- Vincular el formulario con la base de datos. (Estimado: 1 hora)

##### Historia de Usuario 2: Cálculo de Costo Total de Compra

###### Tareas:
- Calcular el costo total de la compra. (Estimado: 1 hora)
- Ingresar la acción a la base de datos. (Estimado: 2 horas)

##### Historia de Usuario 3: Eliminar Acción Registrada

###### Tareas:
- Eliminar de la base de datos el registro de la acción. (Estimado: 2 horas)
- Mostrar la nueva lista de acciones registradas. (Estimado: 1 hora)

**Resumen de Iteración:**
- Estimación Total: 12 horas
- Tiempo Real: 40 horas
- Velocidad Total: 0.3

### Iteración 2

#### Objetivo: Permitir al usuario observar las acciones registradas.

##### Historia de Usuario 4: Listado de Acciones

###### Tareas:
- Crear una página para mostrar la lista de acciones. (Estimado: 2 horas)
- Actualizar la página al ingresar una nueva acción. (Estimado: 1 hora)

##### Historia de Usuario 5: Información de Acciones

###### Tareas:
- Codificar la página de lista de acciones. (Estimado: 2 horas)

##### Historia de Usuario 6: Búsqueda de Acciones por Nombre

###### Tareas:
- Agregar a la página un NavBar y un espacio de texto para buscar una acción. (Estimado: 2 horas)
- Agregar un botón en el NavBar para presentar el listado de las acciones en diferentes modos. (Estimado: 2 horas)

**Resumen de Iteración:**
- Estimación Total: 9 horas
- Tiempo Real: 40 horas
- Velocidad Total: 0.225

### Iteración 3

#### Objetivo: Permitir al usuario el modo de visualización de la app en claro o a dark.

##### Historia de Usuario 7: Cambiar de Modo de Visualización a Dark.

###### Tareas:
- Agregar el botón para cambiar de modo claro a oscuro. (Estimado: 1 hora)
- Cambiar el color del contenido de la app. (Estimado: 2 horas)

**Resumen de Iteración:**
- Estimación Total: 3 horas
- Tiempo Real: 40 horas
- Velocidad Total: 0.075


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
