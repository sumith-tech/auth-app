import React, { useContext } from "react";
import { useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../Store/context-auth";
const ProfileForm = () => {
  const newPassword = useRef();
  const authCtx = useContext(AuthContext);
  const onsubmitHandler = (event) => {
    event.preventDefault();
    const updatePassword = newPassword.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCUc9bY7No9sh6JOBba_0ch-DUNaEmIcvA",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: updatePassword,
          returnSecureToken: false,
        }),
      }
    ).then((res) => {
      // always succed
    });
  };

  return (
    <form onSubmit={onsubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" min="7" ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
