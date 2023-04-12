import { Link } from 'react-router-dom'


const Uti3Andar = () => {
  return (
    <div>
        <h3>UTI 3º Andar</h3>
        <div>
            <ul>
                <h4>Número de pacientes</h4>
                <li>Leito 1 <span>v</span></li>
                <li>Leito 2 <span>a</span></li>
                <li>Leito 3 <span>v</span></li>
                <li>Leito 4 <span>a</span></li>
                <li>Leito 5 <span>v</span></li>
                <li>Leito 6 <span>a</span></li>
                <li>Leito 7 <span>a</span></li>
                <li>Leito 8 <span>v</span></li>
                <li>Leito 9 <span>v</span></li>
                <li>Leito 10 <span>v</span></li>
            </ul>
            <ul>
                <h4>Funcionários</h4>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
                <li>valor dinâmico</li>
            </ul>
        </div>
        <button><Link to='/'>Voltar</Link></button>
    </div>
  )
}

export default Uti3Andar