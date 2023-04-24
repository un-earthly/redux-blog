import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store> */}
    <RouterProvider router={routes} />
    {/* </Provider> */}
  </React.StrictMode>
);

