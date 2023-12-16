import React, { useState, useEffect } from "react";
import "./loginsignup.css";

const LoginSignup = () => {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if user is coming back from dashboard
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn) {
      // Reset fields and remove flag
      setUsername("");
      setPassword("");
      setEmail("");
      sessionStorage.removeItem("loggedIn");
    }
  }, []);

  const handleToggle = () => {
    setLogin((prevIsLogin) => !prevIsLogin);
    setUsername("");
    setPassword("");
    setEmail("");
    setErrorMessage("");
  };

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isLogin
      ? "http://localhost:5000/auth/login"
      : "http://localhost:5000/auth/register";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (isLogin) {
          localStorage.setItem("token", data.token);
          sessionStorage.setItem("loggedIn", "true"); // Set the flag
          window.location.href = "/parentdashboard";
        } else {
          console.log("User registered successfully");
          window.location.href = "/login-signup";
        }
      } else {
        const errorData = await response.json();
        console.error("Error:", response.status, errorData.message);
        setErrorMessage("Invalid username or password.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }

    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={handlePasswordToggle}
          ></i>
        </div>

        {!isLogin && (
          <>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button type="button" onClick={handleToggle}>
          {isLogin ? "Sign Up here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
