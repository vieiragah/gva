import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import NavBar from "../components/NavBar";
import GlobalStyle from "../styles/globalstyle";
import Footer from "../components/Footer";
import { AuthContext } from "../hooks/UseAuthenticator";
function App() {
  const { isVerificad } = useContext(AuthContext)
  isVerificad()
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
