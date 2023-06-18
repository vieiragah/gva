import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { HttpClient } from '../../api';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 25px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Select = styled.select`
  max-width: 150px;
  height: 30px;
  font-size: 18px;
  background-color: #e4e4e4;
  margin-right: 15px;
  border-radius: 5px;
`;

const Option = styled.option``;

const Label = styled.label`
  cursor: pointer;
  padding: 2px 6px;
  margin-right: 10px;
  font-size: 17px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px gray;

  ${(props) =>
    props.$gray &&
    css`
      background-color: gray;
    `}
  ${(props) =>
    props.$green &&
    css`
      background-color: green;
    `}
  ${(props) =>
    props.$yellow &&
    css`
      background-color: yellow;
    `}
  ${(props) =>
    props.$red &&
    css`
      background-color: red;
    `}
`;

const Form = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [sector, setSector] = useState('');
  const [bed, setBed] = useState('');

  const [countBed, setCountBed] = useState(1);
  const increment = (e) => {
    e.preventDefault()
    setCountBed((prevCount) => prevCount + 1);
  };
  const decrement = (e) => {
    e.preventDefault()
    setCountBed((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    setData((info) => [
      ...info,
      {
        sector,
        bed: countBed,
        status,
      },
    ]);
  }, [sector, bed, status]);

  function handleSubmit(e) {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
      HttpClient.post('/status')
        .then((res) => {
          console.log(res.data);
          toast.success()
        })
        .catch((error) => {
          toast.error(error);
        });
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputArea>
          <Select required onChange={(e) => setSector(e.target.value)}>
            <Option value={null}>Selecionar</Option>
            <Option value="UTI BT">UTI BT</Option>
            <Option value="UTI 5 Andar">UTI 5 Andar</Option>
            <Option value="UTI 3 Andar">UTI 3 Andar</Option>
          </Select>
          <div>
            <button onClick={decrement}>-</button>
            <span onChange={(e) => setBed(e.target.value)}>
              {`Leito ${countBed}`}
            </span>
            <button onClick={increment}>+</button>
          </div>
        </InputArea>
        <InputArea>
          <Label $gray>Vazio</Label>
          <Input
            name="name"
            type="radio"
            value="empty"
            onChange={(e) => setStatus(e.target.value)}
          />
        </InputArea>
        <InputArea>
          <Label $green>Estável</Label>
          <Input name="name" type="radio" value="good" />
        </InputArea>
        <InputArea>
          <Label $yellow>Instável</Label>
          <Input
            name="name"
            type="radio"
            value="bad"
            onChange={(e) => setStatus(e.target.value)}
          />
        </InputArea>
        <InputArea>
          <Label $red>Crítico</Label>
          <Input
            name="name"
            type="radio"
            value="critical"
            onChange={(e) => setStatus(e.target.value)}
          />
        </InputArea>
        <Button type="submit">SALVAR</Button>
      </FormContainer>
      <Link to="/sectors">
        <Button>Voltar</Button>
      </Link>
    </>
  );
};

export default Form;
