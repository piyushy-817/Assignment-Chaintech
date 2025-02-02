import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/account"; 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div
        style={{
          width: "400px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        className="card"
      >
        <h3>Login</h3>
        {error && <p className="text-danger">{error}</p>}
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ marginBottom: "10px" }}
        />
        <button
          className="btn btn-success"
          onClick={handleLogin}
          style={{
            backgroundColor: "rgb(173, 216, 230)",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <div style={{ marginTop: "20px" }}>
          <Link to="/register" className="btn btn-secondary">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
