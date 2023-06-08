import { useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // Verifica se o usuário está conectado/não deixa ele navegar nas rotas por meio da URL
  // obs: Após colocar está verif dentro do contexto não tem reload excessivo após o login.
  function isVerificad() {
    const navigate = useNavigate();

    useEffect(() => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login");
      }
    }, []);
  }
  // Verifica se o usuário é um adm para realizar as renderizações corretas.
  const adm = () => {
    const getUser = localStorage.getItem("user");

    if (!getUser) {
      return console.log("Você não tem permissão");
    }
    const parseUser = JSON.parse(getUser);
    const user = parseUser.user.adm;
    return user;
  };
  const enf = () => {
    const getUser = localStorage.getItem("user");
    if (!getUser) {
      return console.log("Sem acesso !");
    }
    const parseUser = JSON.parse(getUser);
    const enf = parseUser.user.enf;
    return enf;
  };

  return (
    <AuthContext.Provider value={{ adm, enf, isVerificad }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
