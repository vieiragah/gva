import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/main/Home';
import ErrorPage from '../pages/main/ErrorPage';
import Login from '../pages/main/Login';
import Register from '../pages/main/Register';
import * as Uti from '../pages/setores/index'
import AreaAdm from '../pages/main/AreaAdm'
import Sectors from '../pages/main/Sectors';

const isLogged = () => {
  localStorage.getItem("user")
}

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
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
          path: "/sectors",
          element: <Sectors/>
        },
        {
          path: "/sectors/utibt1",
          element: <Uti.UtiBt1/>
        },
        {
          path:"/sectors/utibt",
          element:<Uti.UtiBt/>
        },
        {
          path:"/sectors/utiuco",
          element:<Uti.UtiUco/>
        },
        {
          path:"/sectors/uti3andar",
          element:<Uti.Uti3Andar/>
        },
        {
          path:"/sectors/uti4andar",
          element:<Uti.Uti4Andar/>
        },
        {
          path:"/sectors/uti5andar",
          element:<Uti.Uti5Andar/>
        },
        {
          path:"/sectors/uticirurgica",
          element:<Uti.UtiCirurgica/>
        },
        {
          path:"/areaAdm",
          element: <AreaAdm/>
        }
      ]
    },
  ]);