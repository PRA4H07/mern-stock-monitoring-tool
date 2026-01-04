import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // 1️⃣ Read token from URL (first login)
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);

      // clean URL (remove ?token=...)
      window.history.replaceState({}, document.title, "/");
    }

    // 2️⃣ Check token in dashboard storage
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3000/login";
    } else {
      setCheckingAuth(false);
    }
  }, []);

  if (checkingAuth) {
    return <div style={{ padding: "20px" }}>Checking authentication...</div>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
