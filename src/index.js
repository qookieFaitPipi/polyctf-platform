import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// cookies
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
);