import { Link } from "react-router-dom";

import * as S from '../../styles/Index'

const Home = () => {
  return (
    <S.Container>
      <Link to='sectors'>
        <S.Card>
        <h2>Setores</h2>
        <p>Acesse o setor em que trabalha</p>
      </S.Card>
      </Link>
      
      <S.Card>
        <h2>Em breve...</h2>
        <p>Sistema para monitoramento de materiais.</p>
      </S.Card>
      <Link to="areaAdm">
        <S.Button>ADM</S.Button>
      </Link>
    </S.Container>
  );
};

export default Home;
