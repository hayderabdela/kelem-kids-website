import React, { useState } from "react";
import "./loginsignup.css";

const LoginSignup = () => {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const handleToggle = () => {
    setLogin((prevIsLogin) => !prevIsLogin);
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
      console.log(response.data)
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Handle successful login or registration here
        if (isLogin) {
          // For login, you might want to store the token in localStorage or handle redirection
          localStorage.setItem("token", data.token);
          // Redirect to a dashboard or home page
          window.location.href = "/parentdashboard";
        } else {
          // For registration, you might want to display a success message or redirect to login
          console.log("User registered successfully");
          window.location.href = '/login-signup'
          // Redirect to the login page
          // Example: setLogin(true);
        }
      } else {
        // Handle errors for unsuccessful login or registration
        const errorData = await response.json();
        console.error("Error:", response.status, errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
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
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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
