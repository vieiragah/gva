import { Link } from 'react-router-dom'
import { Container, Setores } from '../../styles'
import { Button } from '../../styles/Button'
import { Ul, Li } from '../../styles/List'


export const UtiUco = () => {
  return (
    <Container>
        <h3>UTI UCO</h3>
        <Setores>
            <Ul direction>
                <h4>Número de pacientes</h4>
                <Li secundary>Leito 1 <span>v</span></Li>
                <Li secundary>Leito 2 <span>a</span></Li>
                <Li secundary>Leito 3 <span>v</span></Li>
                <Li secundary>Leito 4 <span>a</span></Li>
                <Li secundary>Leito 5 <span>v</span></Li>
                <Li secundary>Leito 6 <span>a</span></Li>
                <Li secundary>Leito 7 <span>a</span></Li>
                <Li secundary>Leito 8 <span>v</span></Li>
                <Li secundary>Leito 9 <span>v</span></Li>
                <Li secundary>Leito 10 <span>v</span></Li>
            </Ul>
            <Ul direction>
                <h4>Funcionários</h4>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
                <Li>valor dinâmico</Li>
            </Ul>
        </Setores>
        <Link to='/'><Button>Voltar</Button></Link>
    </Container>
  )
}