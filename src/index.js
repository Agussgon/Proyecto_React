//Babel ya viene x defecto tambien
// estos son los CDN directamente ahora no usamos los links  
//estas librerias estan en node-modules
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// obviamente exporte la funcion de app desde su archivo ver
// si quiero exportar otra funcion de ese archivo iria, {nombreOtraFuncion}
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
