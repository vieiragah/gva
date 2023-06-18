import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import NavBar from "../components/NavBar";
import GlobalStyle from "../styles/globalstyle";
import Footer from "../components/Footer";
import { AuthContext } from "../hooks/UseAuthenticator";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {
  const { isVerificad } = useContext(AuthContext)
  isVerificad()
  return (
    <div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
