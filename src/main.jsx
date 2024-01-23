// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import { RouterProvider,createBrowserRouter} from "react-router-dom"
import Video from './components/Video.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/watch',
        element: <Video />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  // </React.StrictMode>
);