import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import GlobalStyle from "../styles/globalstyle";
import Footer from "../components/Footer";
import { AuthProvider } from "../store/User";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <AuthProvider>
      <GlobalStyle />
        <div>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;

