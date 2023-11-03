import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Contact from './Pages/contato/Contact.jsx';
import Despesa from './Pages/despesa/Despesa.jsx';
import Home from './Pages/home/Home.jsx';
import App from './app/App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contato",
        element: <Contact />
      },
      {
        path: "/despesa",
        element: <Despesa />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
