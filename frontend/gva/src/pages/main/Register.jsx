import axios from 'axios';
import { useState } from 'react';
import * as S from '../../styles/Index'
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adm, setAdm] = useState(false)
  const [enf, setEnf] = useState(false)
  const [error, setError] = useState('')


  const registerUser = axios.create({
    baseURL: 'http://localhost:3000/api',
    
  })
//console.log(name, email, password);
    const handleSubmit = (e) => {
    e.preventDefault();
    let formatedEmail = email.toLocaleLowerCase()
    setError('')
    registerUser.post(
      "/users",
      {
        name,
        email: formatedEmail,
        password,
        adm,
        enf
      }
      ).then(res => {
        console.log(res.data);
        window.location.reload()
      }).catch(error => {
        console.log(error.res.data.msg);
      })

    };

  return (
    <S.Container>
        <S.Form onSubmit={handleSubmit}>
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
            placeholder='Confirmação da senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <label>Administrador:</label>
          <select name="adm" onChange={(e) => setAdm(e.target.value)}>
            <option value='false'>false</option>
            <option value='true'>true</option>
          </select>
          <label>Enfermeiro:</label>
          <select name="enf" onChange={(e) => setEnf(e.target.value)}>
            <option value='false'>false</option>
            <option value='true'>true</option>
          </select>
          {error && <p>{error}</p>}
          <S.Button $dinamicButton 
            disabled={!name || !email || !password || password != confirmPassword}>
            Cadastrar
          </S.Button>
        </S.Form>
        <Link to='/areaAdm'><S.Button>Voltar</S.Button></Link>
    </S.Container>
  )
}

export default Register