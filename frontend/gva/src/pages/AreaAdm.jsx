import { Link } from "react-router-dom";
import { Container } from "../styles";
import { Button } from "../styles/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const AreaAdm = (props) => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

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
          document.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleEdit = (id) => {
    if (window.confirm("Deseja editar este usuário?")) {
      setEditItem(id);
    }
  };
  const handleSave = (id) => {

    axios
      .put(`http://localhost:3000/api/users/${id}`, data)
      .then(() => {

        setEditItem(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <Container>
      
          <Link to="/register"><Button $greenButton>Cadastrar usuário</Button></Link>
  
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
              <tr key={users._id}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.password}</td>
                <td>
                  {editItem === users._id ? (
                    <div>
                      {/* Campos de edição */}
                      <input
                        type="text"
                        value={users.name}
                        onChange={(e) => handleInputChange(e.target.value, "name")}
                      />
                      <input
                        type="text"
                        value={users.email}
                        onChange={(e) => handleInputChange(e, "email")}
                      />
                      <input
                        type="text"
                        value={users.password}
                        onChange={(e) => handleInputChange(e, "password")}
                      />
                      <Button onClick={() => handleSave(users._id)}>
                        Salvar
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button onClick={() => handleEdit(users._id)}>
                        Editar
                      </Button>
                      <Button $redButton onClick={() => handleDelete(users._id)}>
                        Excluir
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </Container>
  );
};

export default AreaAdm;
