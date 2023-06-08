import { useEffect, useState, createContext } from "react";
import { HttpClient } from "../api";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    HttpClient.get("/status")
      .then((res) => {
        return setTest(res.test);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ test }}>{children}</AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
