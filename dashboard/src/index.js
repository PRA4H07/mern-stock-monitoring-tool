import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// 🔐 GET TOKEN FROM URL (FIRST LOGIN)
const params = new URLSearchParams(window.location.search);
const tokenFromUrl = params.get("token");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
  window.history.replaceState({}, document.title, "/");
}

// 🔐 CHECK TOKEN IN DASHBOARD STORAGE
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "http://localhost:3001/login";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
