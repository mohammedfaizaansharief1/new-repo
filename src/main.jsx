// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Browse from './components/Browse.jsx'
import { RouterProvider,createBrowserRouter} from "react-router-dom"
import Video from './components/Video.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/browse",
        element: <Browse/>,
      },
      {
        path: "/browse/watch",
        element: <Video/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>,
)
