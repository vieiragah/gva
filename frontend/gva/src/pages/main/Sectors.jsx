import { Link } from "react-router-dom";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Ul, Li } from "../../styles/List";

const Sectors = () => {
  return (
    <Container>
      <h2>Setores</h2>
      <p>
        Selecione o seu setor de origem a baixo para realizar a confirmação:
      </p>
      <Ul>
        <Li primary>
          <Link to="utibt1">UTI BT1</Link>
        </Li>
        <Li primary>
          <Link to="utibt">UTI BT</Link>
        </Li>
        <Li primary>
          <Link to="utiuco">UTI UCO</Link>
        </Li>
        <Li primary>
          <Link to="uti3andar">UTI 3ª Andar</Link>
        </Li>
        <Li primary>
          <Link to="uti4andar">UTI 4ª Andar</Link>
        </Li>
        <Li primary>
          <Link to="uti5andar">UTI 5ª Andar</Link>
        </Li>
        <Li primary>
          <Link to="uticirurgica">UTI Cirúrgica</Link>
        </Li>
      </Ul>
      <Link to='/'><Button>Voltar</Button></Link>
    </Container>
  );
};

export default Sectors;
