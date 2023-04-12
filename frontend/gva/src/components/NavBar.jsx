import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header>
            <div>
                <h1><Link to='/'>GVA <span>Med</span></Link></h1>
                <ul>
                    <li><Link to='/'>Setor</Link></li>
                    <li><Link to='/register'>Cadastrar-se</Link></li>
                    <li><Link to='/login'>Entrar</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default NavBar