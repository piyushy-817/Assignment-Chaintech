import React, { useEffect, useState } from "react";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      setForm(currentUser);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) =>
      u.email === user.email ? { ...form } : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(form));

    setUser(form);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users = users.filter((u) => u.email !== user.email); // Remove user from stored users

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("currentUser"); // Remove current user session

      alert("Your account has been deleted.");
      window.location.href = "/register"; // Redirect to register page after deletion
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <h3>Account Details</h3>
        {user ? (
          <>
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  style={{ marginBottom: "10px" }}
                />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ marginBottom: "10px" }}
                />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="New Password"
                  style={{ marginBottom: "10px" }}
                />
                <button
                  className="btn btn-success"
                  onClick={handleSave}
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button
                  className="btn btn-primary"
                  onClick={handleEdit}
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  Edit
                </button>
              </>
            )}
            {/* Logout Button */}
            <button
              className="btn btn-danger"
              onClick={handleLogout}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              Logout
            </button>
            {/* Delete Account Button */}
            <button
              className="btn btn-dark"
              onClick={handleDeleteAccount}
              style={{ width: "100%" }}
            >
              Delete Account
            </button>
          </>
        ) : (
          <p>No user logged in.</p>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
