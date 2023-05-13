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
    
    label{
        padding: 5px;
        
    } 
`;

const Escala = () => {
    // const [status, setStatus] = useState()
    // const [ empty, setEmpty ] = useState()
    // const [ green, setGreen ] = useState()
    // const [ yellow, setYellow ] = useState()
    // const [ red, setRed ] = useState()

  //TESTE------------------------------------------------
  const [empty1, setEmpty1] = useState(false);
  const [green1, setGreen1] = useState(false);
  const [yellow1, setYellow1] = useState(false);
  const [red1, setRed1] = useState(false);
  const [empty2, setEmpty2] = useState(false);
  const [green2, setGreen2] = useState(false);
  const [yellow2, setYellow2] = useState(false);
  const [red2, setRed2] = useState(false);

    function handleSubmit(e) {
    e.preventDefault();

    const leito1 =
      empty1 || green1 || yellow1 || red1
        ? {
            empty: empty1,
            green: green1,
            yellow: yellow1,
            red: red1,
          }
        : undefined;

    const leito2 =
      empty2 || green2 || yellow2 || red2
        ? {
            empty: empty2,
            green: green2,
            yellow: yellow2,
            red: red2,
          }
        : undefined;

    const data = { leito1, leito2 };
    const statusPacient = axios.create({
      baseURL: 'http://localhost:3000/api'
    })

    statusPacient
      .post("/status", data)
      .then((res) => {
        console.log(res.data);
        setStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  //-------------------------------------------------------






  // const statusPacient = axios.create({
  //   baseURL: 'http://localhost:3000/api'
  // })

  // const option1 = ({option1})=> {
  //   option1.value
  // }
  //   const option2 = ({option2})=> {
  //   option2.value
  // }
  //   function handleSubmit (e) {
  //     e.preventDefault()

  //     statusPacient.post(
  //       "/status",
  //       {
  //         leito1: option1,
  //         leito2: option2
  //       }
  //     ).then(res => {
  //       console.log(res.data);
  //     }).catch(error => {
  //       console.log(error);
  //     })
      
  //   }

  return (
    <div>
      <h1>escala</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Div>
          <h3>Leito 1</h3>
          <label>
            vazio
            <input type="radio" 
            name="option1"
            value="empty"
            checked={empty1}
            onChange={(e) => setEmpty1(e.target.value)}
            />
          </label>
          <label>
            Verde
            <input type="radio" 
            name="option1"
            value="green"
            checked={green1}
            onChange={(e) => setGreen1(e.target.value)}
            />
          </label>
          <label>
            Amarelo
            <input type="radio" 
            name="option1"
            value="yellow"
            checked={yellow1}
            onChange={(e) => setYellow1(e.target.value)}/>
          </label>
          <label>
            Vermelho
            <input type="radio"
            name="option1"
            value="red"
            checked={red1}
            onChange={(e) => setRed1(e.target.value)}
            />
          </label>
          </Div>
          <Div>
          <h3>Leito 2</h3>
          <label>
            vazio
            <input type="radio" 
            name="option2"
            value="empty"
            checked={empty2}
            onChange={(e) => setEmpty2(e.target.value)}
            />
          </label>
          <label>
            Verde
            <input type="radio" 
            name="option2"
            value="green"
            checked={green2}
            onChange={(e) => setGreen2(e.target.value)}
            />
          </label>
          <label>
            Amarelo
            <input type="radio" 
            name="option2"
            value="yellow"
            checked={yellow2}
            onChange={(e) => setYellow2(e.target.value)}/>
          </label>
          <label>
            Vermelho
            <input type="radio"
            name="option2"
            value="red"
            checked={red2}
            onChange={(e) => setRed2(e.target.value)}
            />
          </label>
          </Div>
          <button onSubmit={handleSubmit}>enviar</button>
        </form>
      </div>
      <Link to='/sectors'>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Escala;
