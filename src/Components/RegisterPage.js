import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === form.email)) {
      setError("Email is already registered.");
      return;
    }

    const newUser = { name: form.name, email: form.email, password: form.password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    window.location.href = "/login"; 
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
        <h3>Register</h3>
        {error && <p className="text-danger">{error}</p>}

        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: "10px" }}
        />

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

        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          style={{ marginBottom: "10px" }}
        />

        <button
          className="btn btn-success"
          onClick={handleRegister}
          style={{
            backgroundColor: "rgb(173, 216, 230)",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          Register
        </button>

        <div style={{ marginTop: "20px" }}>
          <Link to="/login" className="btn btn-secondary">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
