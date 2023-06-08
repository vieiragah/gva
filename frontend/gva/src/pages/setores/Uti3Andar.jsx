import * as S from "../../styles/Index";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HttpClient } from "../../api";

// import { AuthContext } from "../../hooks/UseStatusSector";
// import { useContext } from "react";

export const Uti3Andar = () => {
  // const { test } = useContext(AuthContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    HttpClient.get("/status")
      .then((res) => {
        return setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sector = "UTI 3 Andar"

  const filterSector = data.filter((status) => status.sector === sector)

  return (
    <S.Container>
      <h3>UTI 3º Andar</h3>
      <S.Setores>
        <h4>Número de pacientes</h4>
        {filterSector.map((status) => {
          return (
            <ul key={status._id}>
              <S.Li secundary>{status.bed}</S.Li>
              <S.Li secundary>{status.status}</S.Li>
            </ul>
          );
        })}
        <S.Ul direction>
          <h4>Funcionários</h4>
          <S.Li>valor dinâmico</S.Li>
          <S.Li>valor dinâmico</S.Li>
        </S.Ul>
      </S.Setores>
      <Link to="/sectors">
        <S.Button>Voltar</S.Button>
      </Link>
    </S.Container>
  );
};
