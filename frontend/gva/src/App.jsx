import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(!user) {
      navigate('/login')
    }
  },[])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>      
    </div>
  )
}

export default App
