import { End } from "../styles"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <End>
      <h2>GVA <span>Med</span></h2>
        <ul>
          <li><a href="https://github.com/vieiragah" rel="noreferrer" target="_blank"><FaGithub/> Github</a></li>
          <li><a href="https://www.linkedin.com/in/gabriel-apolinario-359432241/" rel="noreferrer" target="_blank"><FaLinkedin/> Linkedin</a></li>
          <li> <a href="https://www.instagram.com/vieira_gaah/" rel="noreferrer" target="_blank"><FaInstagram/> Instagram</a></li>
        </ul>
    </End>
  )
}

export default Footer