import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalstyle';
// rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import UtiBt1 from './pages/setores/UtiBt1'
import UtiBt from './pages/setores/UtiBt'
import UtiUco from './pages/setores/UtiUco'
import Uti3Andar from './pages/setores/Uti3Andar'
import Uti4Andar from './pages/setores/Uti4Andar'
import Uti5Andar from './pages/setores/Uti5Andar'
import UtiCirurgica from './pages/setores/UtiCirurgica'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/utibt1",
        element: <UtiBt1/>
      },
      {
        path:"/utibt",
        element:<UtiBt/>
      },
      {
        path:"/utiuco",
        element:<UtiUco/>
      },
      {
        path:"/uti3andar",
        element:<Uti3Andar/>
      },
      {
        path:"/uti4andar",
        element:<Uti4Andar/>
      },
      {
        path:"/uti5andar",
        element:<Uti5Andar/>
      },
      {
        path:"/uticirurgica",
        element:<UtiCirurgica/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
