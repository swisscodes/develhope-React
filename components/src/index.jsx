import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import Github from './Github';
import DisplayLanguage from './DisplayLanguage';
import ErrorPage from './error-page';
import Githubusers from './GithubUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome name='world' />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },

  {
    path: '/users',
    element: <Githubusers />,
  },

  {
    path: 'users/:userId',
    element: <Github />,
  },

  {
    path: '/lang',
    element: <DisplayLanguage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
