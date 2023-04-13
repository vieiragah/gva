import { Link } from "react-router-dom"
import { Container } from "../styles"
import axios from "axios"
import { useState, useEffect } from "react"

const AreaAdm = (props) => {
  const [data, setData] = useState([]);
// Buscar todos os usuários
  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
    .then((res) => {
      return setData(res.data)
      
    })
    .catch((error) => {
      console.log(error);
    })
    
  },[])
  console.log(data);
// Deletar um usuário
  const {id, onDelete} = props
  function handleDelete() {
    onDelete(id)
  }
  useEffect(() => {
    axios.delete('http://localhost:3000/api/:id')
    .then((del) => {
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <Container>
      <div>
      <button>
      <Link to='/register'>Cadastrar usuário</Link>
      </button>
      </div>
      <thead>
        <tr>
          <th>name:</th>
          <th>email:</th>
          <th>senha:</th>
        </tr>
      </thead>
      <tbody>
        {data.map((users) => {
        return (
          <tr key={users._id}>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.password}</td>
            <button onClick={handleDelete}>deletar</button>
          </tr>
        )
      })}
      </tbody>      
      <Link to='/'><button>Voltar</button></Link>
    </Container>
  )
}

export default AreaAdm