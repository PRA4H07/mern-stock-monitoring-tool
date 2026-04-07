import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // 🔐 LOGOUT HANDLER
  const handleLogout = () => {
    // 1️⃣ Remove JWT from dashboard storage
    localStorage.removeItem("token");

    // 2️⃣ Hard redirect to landing page login
    window.location.href = "https://mern-stock-monitoring-tool-frontend.vercel.app/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* PROFILE SECTION */}
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {/* DROPDOWN */}
        {isProfileDropdownOpen && (
          <div
            style={{
              marginTop: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              width: "120px",
            }}
          >
            <p
              onClick={handleLogout}
              style={{
                margin: 0,
                cursor: "pointer",
                color: "#d32f2f",
                fontWeight: "500",
              }}
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
