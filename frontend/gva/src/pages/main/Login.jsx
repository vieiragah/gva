import * as S from '../../styles/Index'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenUser, setTokenUser] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'http://localhost:3000/api/login',
      {
        email,
        password
      }
    ).then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))

      navigate('/')
      window.location.reload()

    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <S.Container>
        <S.Form onSubmit={handleSubmit}>
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
          <S.Button $dinamicButton disabled={!email || !password} onClick={(e) => setTokenUser(navigate)}>Entrar</S.Button>
          
        </S.Form> 
    </S.Container>
  )
}

export default Login