import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Welcome from './Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome name='world' />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
