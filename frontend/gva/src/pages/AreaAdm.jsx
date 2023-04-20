import { Link } from "react-router-dom";
import { Container } from "../styles";
import axios from "axios";
import { useState, useEffect } from "react";

const AreaAdm = (props) => {
  const [data, setData] = useState([]);
  const [initial, setInitial] = useState(() => {})

  // Buscar todos os usuários
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        return setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 
  const handleDelete = (id) => {
    if (window.confirm("Deseja excluir este usuário?")) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          document.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleEdit = (id) => {
    if (window.confirm("Deseja editar este usuário?")) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          document.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  return (
    <Container>
      <div>
        <button>
          <Link to="/register">Cadastrar usuário</Link>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>name:</th>
            <th>email:</th>
            <th>senha:</th>
            <th>edição:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((users) => {
            return (
              <tr key={users._id} >
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.password}</td>
                <td>
                  <button onClick={() => handleEdit(users._id)}>editar</button>
                  <button onClick={() => handleDelete(users._id)}>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default AreaAdm;
