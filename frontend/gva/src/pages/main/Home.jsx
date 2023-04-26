import { Link } from "react-router-dom";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container";

const Home = () => {
  return (
    <Container>
      <h1>Uma home massa</h1>
      <Link to="areaAdm">
        <Button>ADM</Button>
      </Link>
    </Container>
  );
};

export default Home;
