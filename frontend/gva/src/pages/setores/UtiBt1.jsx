import { Link } from 'react-router-dom'
import * as S from '../../styles/Index'


export const UtiBt1 = () => {
  return (
    <S.Container>
        <h3>UTI BT 1</h3>
        <S.Setores>
            <S.Ul direction>
                <h4>Número de pacientes</h4>
                <S.Li secundary>
                  Leito 1
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </S.Li>
                <S.Li secundary>Leito 2 
                <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </S.Li>
               
            </S.Ul>
            <S.Ul direction>
                <h4>Funcionários</h4>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>
            </S.Ul>
        </S.Setores>
        <Link to='/sectors'><S.Button>Voltar</S.Button></Link>
    </S.Container>
  )
}
