import React from "react";
import { useNavigate } from "react-router-dom";
import BitQuestHeader from "./BitQuestHeader";

function Login({ setShowLogin, users, usernames }) {
  const navigate = useNavigate();
  const footer = require("../Media/bitQuestFooter.png");

  const handleSignUp = () => {
    setShowLogin(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (usernames.includes(username)) {
      window.sessionStorage.setItem(
        "currentUser",
        JSON.stringify(users[username])
      );
      window.sessionStorage.setItem("username", username);
      navigate("/Saves");
    }
  };

  return (
    <>
      <div className="login_formContainer">
        <BitQuestHeader />
        <h2>Login</h2>
        <form className="login_formFieldsContainer" onSubmit={handleLogin}>
          <input
            className="login_formFields"
            type="text"
            placeholder="Username"
            name="username"
          ></input>
          <input
            className="login_formFields"
            type="password"
            placeholder="Password"
            name="password"
          ></input>
          <button className="login_button">Login</button>
        </form>
        <section>
          <p>or</p>
          <button className="login_button" onClick={handleSignUp}>
            Sign Up
          </button>
        </section>
      </div>
      <img src={footer} className="login_footer" alt="bitquest pic" />
    </>
  );
}

export default Login;
