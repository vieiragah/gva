import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  display: inline-block;
  background-color: yellow;
  padding: 8px 20px;
  margin-left: 30px;
  text-align: center;

  label {
    padding: 5px;
  }
`;

const Escala = () => {
  const [empty, setEmpty] = useState("");
  const [good, setGood] = useState("");
  const [bad, setBad] = useState("");
  const [critical, setCritical] = useState("");
  const [nome, setNome] = useState("");
  const [bedQuantity, setBedQuantity] = useState();

  const statusPacient = axios.create({
    baseURL: "http://localhost:3000/api"
  });

  function handleSubmit(e) {
    e.preventDefault();

    const bedStatus = empty
      ? "empty"
      : good
      ? "good"
      : bad
      ? "bad"
      : critical
      ? "critical"
      : "";

    statusPacient
      .post("/status", {
        nome: nome,
        // bed_quantity: bedQuantity,
        bed: Array(bedStatus)
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // Aqui no front estou tentando enviar o form para o db, após isso vou colocar a lógica dentro do context
  //A lógica será o for que renderiza o status de cada leito compátivel com cada leito.
  //Acho que preciso colocar o empty no schema, para uma possível edição no status desse leito caso tenha admissão.

  const renderBed = () => {
    const beds = [];
    for (let i = 1; i <= bedQuantity; i++) {
      beds.push(
        <div key={i}>
          <h3>Leito {i}</h3>
          <label>
            vazio
            <input
              type="radio"
              name={`option${i}`}
              value={empty}
              onChange={() => setEmpty(e.target.value)}
            />
          </label>
          <label>
            Verde
            <input
              type="radio"
              name={`option${i}`}
              value={good}
              onChange={() => setGood(e.target.value)}
            />
          </label>
          <label>
            Amarelo
            <input
              type="radio"
              name={`option${i}`}
              value={bad}
              onChange={() => setBad(e.target.value)}
            />
          </label>
          <label>
            Vermelho
            <input
              type="radio"
              name={`option${i}`}
              value={critical}
              onChange={() => setCritical(e.target.value)}
            />
          </label>
        </div>
      );
    }
    return beds;
  };

  return (
    <div>
      <h1>escala</h1>
      <div>
        <select onChange={e => setNome(e.target.value)}>
          <option value="UTI BT">UTI BT</option>
          <option value="UTI 5 Andar">UTI 5 Andar</option>
        </select>
        <form onSubmit={handleSubmit}>
          {renderBed()}
          <input
            type="number"
            placeholder="Quantidade de leitos"
            value={bedQuantity}
            onChange={e => setBedQuantity(parseInt(e.target.value))}
          />
          <button type="submit">enviar</button>
        </form>
      </div>
      <Link to="/sectors">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Escala;



























































































































































// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const Div = styled.div`
//     display: inline-block;
//     background-color: yellow;
//     padding: 8px 20px;
//     margin-left: 30px;
//     text-align: center;
    
//     label{
//         padding: 5px;
        
//     } 
// `;

// const Escala = () => {
//     // const [status, setStatus] = useState()
//     const [ empty, setEmpty ] = useState([])
//     const [ good, setGood ] = useState([])
//     const [ bad, setBad ] = useState([])
//     const [ critical, setCritical ] = useState([])

//   const statusPacient = axios.create({
//     baseURL: 'http://localhost:3000/api'
//   })

//     function handleSubmit (e) {
//       e.preventDefault()

//       statusPacient.post(
//         "/status",
//         {
//           nome,
//           bed_quantity,
//           bed
//         }
//       ).then(res => {
//         console.log(res.nome);
//       }).catch(error => {
//         console.log(error);
//       })
      
//     }

//   return (
//     <div>
//       <h1>escala</h1>
//       <div>
//         <select>
//             <option value="nome">UTI BT</option>
//             <option value="nome">UTI 5 Andar</option>
//         </select>
//         <form onSubmit={handleSubmit}>
//           <Div>
//           <h3>Leito 1</h3>
//           <label>
//             vazio
//             <input type="radio" 
//             name="option1"
//             value={empty}
//             onChange={(e) => setEmpty(e.target.value)}
//             />
//           </label>
//           <label>
//             Verde
//             <input type="radio" 
//             name="option1"
//             value={good}
//             onChange={(e) => setGood(e.target.value)}
//             />
//           </label>
//           <label>
//             Amarelo
//             <input type="radio" 
//             name="option1"
//             value={bad}
//             onChange={(e) => setBad(e.target.value)}/>
//           </label>
//           <label>
//             Vermelho
//             <input type="radio"
//             name="option1"
//             value={critical}
//             onChange={(e) => setCritical(e.target.value)}
//             />
//           </label>
//           </Div>
//           <button onSubmit={handleSubmit}>enviar</button>
//         </form>
//       </div>
//       <Link to='/sectors'>
//         <button>Voltar</button>
//       </Link>
//     </div>
//   );
// };

// export default Escala;
