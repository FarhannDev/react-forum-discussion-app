/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import assets
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
