import { useState } from 'react'
import { Container, Form, Button } from '../styles'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const userLogin = axios.login({
  //   baseURL: 'http://localhost:3000/api',
    
  // })
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   userLogin.post(
  //     '/login',
  //     {
  //       email, 
  //       password
  //     }
  //     ).then(res => {
  //       console.log(res);
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }
 

  return (
    <Container>
        <Form>
          <label>
            <span>E-mail:</span>
            <input type="email" 
            name='email'
            placeholder='Digite seu e-mail'
            required
            autoComplete='none'
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
          <Button disabled={!email || !password}>Entrar</Button>
        </Form> 
    </Container>
  )
}

export default Login