import { Link } from 'react-router-dom'
import * as S from '../../styles/Index'
import { useState, useEffect } from 'react'
import { HttpClient } from '../../api'
import styled from 'styled-components'

export const TestColor = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: green;
`




export const UtiBt = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    HttpClient.get("/status")
    .then((res) => {
      // console.log(data);
      return setData(res.data)
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  const sector = "UTI BT"

  const filterSector = data.filter((status) => status.sector === sector)
  return (
    <S.Container>
        <h3>UTI Bt</h3>
        <S.Setores>
                <h4>Número de pacientes</h4>
                {filterSector.map((status) => {
                  return(
                    <ul key={status._id} >
                      <S.Li secundary>{status.bed}</S.Li>
                      <S.Li secundary><TestColor>{status.status}</TestColor></S.Li>
                    </ul>
                  )
                })}
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
