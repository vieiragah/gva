import { Link } from "react-router-dom";
import * as S from "../../styles/Index";
import { AuthContext } from "../../hooks/UseAuthenticator";
import { useContext } from "react";

const Home = () => {
  const { adm } = useContext(AuthContext);

  // const isAdm = localStorage.getItem("user")
  // const adm = JSON.parse(isAdm)
  //{adm.user.adm && (componente)}
  return (
    <S.Container>
      <Link to="sectors">
        <S.Card>
          <h2>Setores</h2>
          <p>Acesse o setor em que trabalha</p>
        </S.Card>
      </Link>

      <S.Card>
        <h2>Em breve...</h2>
        <p>Sistema para monitoramento de materiais.</p>
      </S.Card>
      {adm && (
        <Link to="areaAdm">
          <S.Button>ADM</S.Button>
        </Link>
      )}
    </S.Container>
  );
};

export default Home;
