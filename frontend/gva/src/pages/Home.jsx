import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h2>Setores</h2>
      <p>Selecione o seu setor de origem a baixo para realizar a confirmação:</p>
      <ul>
        <li><Link to='utibt1'>UTI BT1</Link></li>
        <li><Link to='utibt'>UTI BT</Link></li>
        <li><Link to='utiuco'>UTI UCO</Link></li>
        <li><Link to='uti3andar'>UTI 3ª Andar</Link></li>
        <li><Link to='uti4andar'>UTI 4ª Andar</Link></li>
        <li><Link to='uti5andar'>UTI 5ª Andar</Link></li>
        <li><Link to='uticirurgica'>UTI Cirúrgica</Link></li>
      </ul>
      
    </div>
  )
}

export default Home