import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button } from '../styles';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser()
  };
  
  const registerUser = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    headers: {
      "name": name,
      "email": email,
      "password": password
    }
  })
  console.log(name, email, password);
  

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text"
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" 
            name='email'
            placeholder='Digite seu e-mail'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password"
            placeholder='Crie uma senha'
            value={password}
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
          <Button disabled={!name || !email || password !== confirmPassword}>Cadastrar</Button>
        </Form>
        
    </Container>
  )
}

export default Register