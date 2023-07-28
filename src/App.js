import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./Store/context-auth";
import { useContext } from "react";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {!authCtx.islogin && <Route path="/auth" element={<AuthPage />} />}
      {authCtx.islogin && <Route path="/profile" element={<UserProfile />} />}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
