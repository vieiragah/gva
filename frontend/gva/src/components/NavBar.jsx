import { Navgate } from '../styles'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header>
            <Navgate>
                <h1><Link to='/'>GVA <span>Med</span></Link></h1>
                <ul>
                    <li><Link to='/'>Setor</Link></li>
                    <li><Link to='/login'>Entrar</Link></li>
                </ul>
            </Navgate>
        </header>
    </div>
  )
}
//                    <li><Link to='/register'>Cadastrar-se</Link></li>

//                                       <li>{user ? "sair" : ""}</li>
//uma renderização condicional no ultimo li, trazendo o status de usuário logado ele aparece o sair, caso contrado nada ou então algum css por trás para não criar aquele padding que ficaria no canto direto. (perguntar ao rafa)
export default NavBar