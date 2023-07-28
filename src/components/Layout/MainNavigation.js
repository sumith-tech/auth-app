import { Link } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../Store/context-auth";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const isLoggedin = authCtx.islogin;
  const onlogoutHandler = () => {
    authCtx.logout();
    navigate('/')
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button onClick={onlogoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
