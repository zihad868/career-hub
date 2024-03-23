import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Applied from './components/Applied/Applied';
import ErrorElement from './components/ErrorElement/ErrorElement';
import JobDetail from './components/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/applied',
        element: <Applied />,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/jobs/:id',
        element: <JobDetail />,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
