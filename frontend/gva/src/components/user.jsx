import { useContext } from "react";
import { AuthContext } from "../store/User";

const UserLogged = () => {
  const { login, logout, isAuthenticated } = useContext(AuthContext);

  function handleLogin() {
    login();
  } 

  function handleLogout() {
    logout();
  }

  return (
    <>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Sair</button>
      ) : (
        <button onClick={handleLogin}>Entrar</button>
      )}
    </>
  );
};

export default UserLogged;
