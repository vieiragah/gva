import { Link } from 'react-router-dom'
import { Container, Setores, PacientClassification } from '../../styles'
import { Button } from '../../styles/Button'


export const UtiBt1 = () => {
  return (
    <Container>
        <h3>UTI BT 1</h3>
        <Setores>
            <ul>
                <h4>Número de pacientes</h4>
                <li>
                  Leito 1
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 2 
                <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 3 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 4 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 5 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 6 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 7 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 8 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 9 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
                <li>Leito 10 
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </li>
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
        </Setores>
        <Link to='/'><Button>Voltar</Button></Link>
    </Container>
  )
}
