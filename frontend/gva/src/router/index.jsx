import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import * as Uti from '../pages/setores/index'
import AreaAdm from '../pages/AreaAdm'

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
          path: "/utibt1",
          element: <Uti.UtiBt1/>
        },
        {
          path:"/utibt",
          element:<Uti.UtiBt/>
        },
        {
          path:"/utiuco",
          element:<Uti.UtiUco/>
        },
        {
          path:"/uti3andar",
          element:<Uti.Uti3Andar/>
        },
        {
          path:"/uti4andar",
          element:<Uti.Uti4Andar/>
        },
        {
          path:"/uti5andar",
          element:<Uti.Uti5Andar/>
        },
        {
          path:"/uticirurgica",
          element:<Uti.UtiCirurgica/>
        },
        {
          path:"/areaAdm",
          element: <AreaAdm/>
        }
      ]
    },
  ]);