import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://mern-stock-monitoring-tool.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Signup failed");
        return;
      }

      // ✅ Signup successful → redirect to login
      window.location.href = "/login";
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ minHeight: "60vh", marginTop: "60px" }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <h2 className="mb-4">Signup</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">
            Signup
          </button>
        </form>

        {message && (
          <p className="text-danger text-center">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Signup;
