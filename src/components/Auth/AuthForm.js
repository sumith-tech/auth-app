import React, { useState, useRef, useContext } from "react";
import classes from "./AuthForm.module.css";
import AuthContext from "../../Store/context-auth";
import { useNavigate } from "react-router-dom";
const AuthForm = (props) => {
  const authctx = useContext(AuthContext);
  const emailInpRef = useRef();
  const passwordInpRef = useRef();

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInpRef.current.value;
    const entredPassword = passwordInpRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUc9bY7No9sh6JOBba_0ch-DUNaEmIcvA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUc9bY7No9sh6JOBba_0ch-DUNaEmIcvA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: entredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }
            throw new Error(errMessage);
          });
        }
      })
      .then((data) => {
        navigate("/");
        authctx.login(data.idToken);
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInpRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInpRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Signing up...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
