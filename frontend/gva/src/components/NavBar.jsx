import React, { useState } from "react";
import * as S from '../styles/Index'
import { Link } from "react-router-dom";
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
      <S.Ul>
        <S.Li>
          {!isLoggedOut && <S.Name>{props}</S.Name>}
          {!isLoggedOut && (
            <S.Button $redButton onClick={removeUserLogged}>
              Sair
            </S.Button>
          )}
        </S.Li>
      </S.Ul>
    </>
  );
};

const NavBar = () => {
  const checkUserLogged = localStorage.getItem("user");
  const data = JSON.parse(checkUserLogged);

  return (
    <S.Nav>
      <Link to="/">
        <S.Logo>
          GVA <span>Med</span>
        </S.Logo>
      </Link>
      <S.Ul>{checkUserLogged && <UserLogged props={data.user.name} />}</S.Ul>
    </S.Nav>
  );
};

export default NavBar;
