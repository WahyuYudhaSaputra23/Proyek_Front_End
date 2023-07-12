import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";

// Di dalam index.js, digunakan ReactDOM.createRoot untuk merender aplikasi React pada elemen dengan ID 'root'.
// Digunakan juga impor file CSS Bulma untuk memperindah tampilan aplikasi.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
