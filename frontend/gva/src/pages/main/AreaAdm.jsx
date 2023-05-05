import * as S from '../../styles/Index'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const AreaAdm = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [editedData, setEditedData] = useState({});


  // let teste  = useMemo(() => {
  //   axios.get("http://localhost:3000/api/users")
  //   .then((res) => {
  //     return setData(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // })
  // teste()

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
      const user = data.find((user) => user._id === id);
  
      setEditedData({
        ...user,
      });
      setEditItem(id);
    }
  };
  
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setData(prevData => {
      const newData = [...prevData];
      const index = newData.findIndex(user => user._id === editItem);
      newData[index][field] = value;
      return newData;
    })
  };


  const handleSave = (id) => {
    const editedUser = data.find(user => user._id === id);
    axios
      .patch(`http://localhost:3000/api/users/${id}`, editedUser)
      .then(() => {

        setEditItem(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <S.Container>
      
          <Link to="/register"><S.Button $greenButton>Cadastrar usuário</S.Button></Link>
      <S.DivTable>
      <S.Table>
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
                <td>
                  {users.name}
                  {editItem === users._id && (
                    <input type="text" 
                      value={users.name}
                      onChange={(e) => handleInputChange(e, 'name')}
                    />
                  )}
                </td>
                <td>
                  {users.email}
                  {editItem === users._id ? (
                    <input type="text" 
                      value={users.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                  ):('')}
                </td>
                <td>
                  {users.password}
                  {editItem === users._id ? (
                    <input type="text"
                    
                      onChange={(e) => handleInputChange(e, 'password')}
                    />
                  ):('')}
                </td>
                <td>
                  {editItem === users._id ? (
                    <div>
                      <S.Button onClick={() => handleSave(users._id)}>
                        Salvar
                      </S.Button>
                    </div>
                  ) : (
                    <div>
                      <S.Button onClick={() => handleEdit(users._id)}>
                        Editar
                      </S.Button>
                      <S.Button $redButton onClick={() => handleDelete(users._id)}>
                        Excluir
                      </S.Button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
      </S.DivTable>
      <Link to="/">
        <S.Button>Voltar</S.Button>
      </Link>
    </S.Container>
  );
};

export default AreaAdm;

