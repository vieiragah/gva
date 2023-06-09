import * as S from '../../styles/Index'
import { Link } from 'react-router-dom'


export const Uti3Andar = () => {
  return (
    <S.Container>
        <h3>UTI 3º Andar</h3>
        <Link to="escala">
          <p>....</p>
        </Link>

        <S.Setores>
            <S.Ul direction>
                <h4>Número de pacientes</h4>
                <S.Li secundary>Leito 1 <span>v</span></S.Li>
                <S.Li secundary>Leito 2 <span>a</span></S.Li>
                <S.Li secundary>Leito 3 <span>v</span></S.Li>
            </S.Ul>
            <S.Ul direction>
                <h4>Funcionários</h4>
                <S.Li>valor dinâmico</S.Li>
                <S.Li>valor dinâmico</S.Li>

            </S.Ul>
        </S.Setores>
        <Link to='/sectors'><S.Button>Voltar</S.Button></Link>
    </S.Container>
  )
}
