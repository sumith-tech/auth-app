import React from "react";

const AuthContext = React.createContext({
  token: "",
  islogin: null,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
