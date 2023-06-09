import { Link } from "react-router-dom";
import * as S from '../../styles/Index'


const Sectors = () => {
  return (
    <S.Container>
      <h2>Setores</h2>
      <p>
        Selecione o seu setor de origem a baixo para realizar a confirmação:
      </p>
      <S.Setores>
        <S.Sectors>
          <Link to="utibt1">UTI BT1</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="utibt">UTI BT</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="utiuco">UTI UCO</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="uti3andar">UTI 3ª Andar</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="uti4andar">UTI 4ª Andar</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="uti5andar">UTI 5ª Andar</Link>
        </S.Sectors>
        <S.Sectors>
          <Link to="uticirurgica">UTI Cirúrgica</Link>
        </S.Sectors>
      </S.Setores>
      <Link to='/'><S.Button>Voltar</S.Button></Link>
    </S.Container>
  );
};

export default Sectors;
