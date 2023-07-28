import React, { useState } from "react";
import AuthContext from "./context-auth";

const AuthToken = (props) => {
  const [token, setToken] = useState("");

  const saveTokenHandler = (token) => {
    setToken(token);
  };
  const deleteTokenHandler = () => {
    setToken("");
  };
  const isloggedin = !!token;

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
