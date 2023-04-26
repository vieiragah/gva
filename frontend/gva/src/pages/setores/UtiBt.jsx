import { Link } from 'react-router-dom'
import * as S from '../../styles/Index'


export const UtiBt = () => {
  return (
    <S.Container>
        <h3>UTI Bt</h3>
        <S.Setores>
            <S.Ul direction>
                <h4>Número de pacientes</h4>
                <S.Li secundary>Leito 1 <span>v</span></S.Li>
                <S.Li secundary>Leito 2 <span>a</span></S.Li>
                <S.Li secundary>Leito 3 <span>v</span></S.Li>
                <S.Li secundary>Leito 4 <span>a</span></S.Li>
                <S.Li secundary>Leito 5 <span>v</span></S.Li>
                <S.Li secundary>Leito 6 <span>a</span></S.Li>
                <S.Li secundary>Leito 7 <span>a</span></S.Li>
                <S.Li secundary>Leito 8 <span>v</span></S.Li>
                <S.Li secundary>Leito 9 <span>v</span></S.Li>
                <S.Li secundary>Leito 10 <span>v</span></S.Li>
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
