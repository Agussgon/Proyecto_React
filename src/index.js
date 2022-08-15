//Babel ya viene x defecto tambien
// estos son los CDN directamente ahora no usamos los links  
//estas librerias estan en node-modules
import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

// obviamente exporte la funcion de app desde su archivo ver
// si quiero exportar otra funcion de ese archivo iria, {nombreOtraFuncion}
import App from './container/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


