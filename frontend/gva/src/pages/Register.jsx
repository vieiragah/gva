import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button } from '../styles';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const registerUser = axios.create({
    baseURL: 'http://localhost:3000/api',
    
  })
//console.log(name, email, password);
    const handleSubmit = (e) => {
    e.preventDefault();
    registerUser.post(
      "/users",
      {
        name,
        email,
        password
      }
    )
    return ""
  };
  

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text"
            placeholder='Digite seu nome'
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" 
            name='email'
            id='email'
            placeholder='Digite seu e-mail'
            onChange={(e) => setEmail(e.target.value)}

            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password"
            placeholder='Crie uma senha'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>confirme a senha:</span>
            <input type="password" 
            placeholder='Senha com 6 digitos'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <Button disabled={!name || !email || !password || password != confirmPassword}>Cadastrar</Button>
        </Form>
        
    </Container>
  )
}

export default Register