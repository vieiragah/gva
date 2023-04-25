import React, { useState } from "react";
import { Button } from "../styles/Button";
import { Li, Ul } from "../styles/List";
import { Nav } from "../styles/Nav";
import { Link } from "react-router-dom";
import { Logo, Name } from "../styles/Logo";
import { useNavigate } from "react-router-dom";



const UserLogged = ({ props }) => {
  const navigator = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const removeUserLogged = () => {
    localStorage.removeItem("user");
    setIsLoggedOut(true);
    navigator("/login");
  };

  return (
    <>
      <Ul>
        <Li>
          {!isLoggedOut && (
            <Button>
            <Link to="/">Setor</Link>
          </Button>
          )}
          {!isLoggedOut && (
            <Name>{props}</Name>
          )}
          {!isLoggedOut && (
            <Button $redButton onClick={removeUserLogged}>Sair</Button>
          )}
        </Li>
      </Ul>
    </>
  );
};

const NavBar = () => {
  const checkUserLogged = localStorage.getItem("user");
  const data = JSON.parse(checkUserLogged);

  return (
    <Nav>
      <Link to="/">
        <Logo>
          GVA <span>Med</span>
        </Logo>
      </Link>
      <Ul>
        {checkUserLogged && (
          <UserLogged props={data.user.name} />
        )}
      </Ul>
    </Nav>
  );
};

export default NavBar;
