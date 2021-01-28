import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import sushiLogo from "./images/sushiLogo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Password: ${password}`);
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: `"${email}"`,
        password: `"${password}"`,
      }),
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Login Success");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });

    // e.target.email.value = "";
    // e.target.password.value = "";
  };
  return (
    <div className="login">
      {/* <Link to="/cart"> */}
      <img className="login__logo" src={sushiLogo} alt="" />
      {/* </Link> */}

      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={handleEmailInput} />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={handlePasswordInput}
          />

          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Conditions of Use & Sale. Please see
          our Privacy Policy, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button className="login__signInButton">Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
