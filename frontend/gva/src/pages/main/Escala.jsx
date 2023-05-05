import { useState } from "react";
import styled from "styled-components";
export const Divizinha = styled.div`
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

    const [status, setStatus] = useState()

    function handleSubmit (e) {
        e.preventDefault()
    }

  return (
    <div>
      <h1>escala</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Divizinha>
          <h3>Leito 1</h3>
          <label>
            Verde
            <input type="checkbox" 
                onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <label>
            Amarelo
            <input type="checkbox" />
          </label>
          <label>
            Vermelho
            <input type="checkbox" />
          </label>
          </Divizinha>
          <hr />
          <h3>Leito 2</h3>
          <label>
            Verde
            <input type="checkbox" />
          </label>
          <label>
            Amarelo
            <input type="checkbox" />
          </label>
          <label>
            Vermelho
            <input type="checkbox" />
          </label>
          <hr />
          <h3>Leito 3</h3>
          <label>
            Verde
            <input type="checkbox" />
          </label>
          <label>
            Amarelo
            <input type="checkbox" />
          </label>
          <label>
            Vermelho
            <input type="checkbox" />
          </label>
          <hr />
          <button onSubmit={handleSubmit}>enviar</button>

        </form>
      </div>
    </div>
  );
};

export default Escala;
