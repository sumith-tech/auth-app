import React, { useState } from "react";
import AuthContext from "./context-auth";

const AuthToken = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
 
  const saveTokenHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    const autologout = setTimeout(deleteTokenHandler,10000);
  };


  const deleteTokenHandler = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  const isloggedin = !!token;
  const autologout = setTimeout(deleteTokenHandler,10000);
  const authcontext = {
    token: token,
    islogin: isloggedin,
    login: saveTokenHandler,
    logout: deleteTokenHandler,
  };
  return (
    <AuthContext.Provider value={authcontext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthToken;
