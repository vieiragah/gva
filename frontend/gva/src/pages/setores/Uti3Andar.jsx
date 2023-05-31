import * as S from '../../styles/Index'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Uti3Andar = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:3000/api/status")
    .then((res) => {
      console.log(data);
      return setData(res.data)
    }).catch((error) => {
      console.log(error);
    })
  },[])
  return (
    <S.Container>
        <h3>UTI 3º Andar</h3>

        <S.Setores>
            <S.Ul direction>
                <h4>Número de pacientes</h4>
                {data.map((status) => {
                  return(
                    <S.Li secundary >{status.name}</S.Li>
                  )
                })}
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
