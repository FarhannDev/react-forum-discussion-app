/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configureStore';
import App from './App';
// import assets
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/auth.css';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
          v7_normalizeFormMethod: true,
        }}
      >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
