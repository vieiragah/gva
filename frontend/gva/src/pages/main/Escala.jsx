import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HttpClient } from "../../api";

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
  const [sector, setSector] = useState("");
  const [bedQuantity, setBedQuantity] = useState(3);
  const [status, setStatus] = useState("");
  const [selectedBed, setSelectedBed] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((previousData) => [
      ...previousData,
      {
        sector,
        bed: selectedBed,
        status,
      },
    ]);
  }, [sector, selectedBed, status]);

  console.log(data);

  function handleSubmit(e) {
    e.preventDefault();
    HttpClient.post("/status", { documents: data.slice(2) })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderBed = () => {
    const beds = [];
    for (let i = 1; i <= bedQuantity; i++) {
      beds.push(
        <div key={i}>
          <h3 value={`leito ${i}`}>Leito {i}</h3>
          <label>
            vazio
            <input
              type="radio"
              name={`bed${i}`}
              value={"empty"}
              onChange={(e) => {
                setStatus(e.target.value);
                setSelectedBed(`Leito ${i}`);
              }}
            />
          </label>
          <label>
            Verde
            <input
              type="radio"
              name={`bed${i}`}
              value={"good"}
              onChange={(e) => {
                setStatus(e.target.value);
                setSelectedBed(`Leito ${i}`);
              }}
            />
          </label>
          <label>
            Amarelo
            <input
              type="radio"
              name={`bed${i}`}
              value={"bad"}
              onChange={(e) => {
                setStatus(e.target.value);
                setSelectedBed(`Leito ${i}`);
              }}
            />
          </label>
          <label>
            Vermelho
            <input
              type="radio"
              name={`bed${i}`}
              value={"critical"}
              onChange={(e) => {
                setStatus(e.target.value);
                setSelectedBed(`Leito ${i}`);
              }}
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
        <select required onChange={(e) => setSector(e.target.value)}>
          <option value={null}>
            Selecionar
          </option>
          <option value="UTI BT">UTI BT</option>
          <option value="UTI 5 Andar">UTI 5 Andar</option>
          <option value="UTI 3 Andar">UTI 3 Andar</option>
        </select>
        <form onSubmit={handleSubmit}>
          {renderBed()}
          <input
            type="number"
            placeholder="Quantidade de leitos"
            value={bedQuantity}
            onChange={(e) => setBedQuantity(parseInt(e.target.value))}
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
