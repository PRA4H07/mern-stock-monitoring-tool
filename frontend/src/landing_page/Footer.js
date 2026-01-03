import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container-fluid border-top">
        <div className="row mt-5 ">
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="images/logo.svg"
              style={{ width: "130px", marginBottom: "20px" }}
              alt="Zerodha Logo"
            />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 style={{ fontWeight: "600", marginBottom: "15px" }}>Company</h6>
            <div className="d-flex flex-column">
              <Link to="/about" className="mb-2 text-dark" style={{ textDecoration: "none" }}>About</Link>
              <Link to="/product" className="mb-2 text-dark" style={{ textDecoration: "none" }}>Products</Link>
              <Link to="/pricing" className="mb-2 text-dark" style={{ textDecoration: "none" }}>Pricing</Link>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Referral programme</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Careers</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Zerodha.tech</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Press & media</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Zerodha cares (CSR)</a>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 style={{ fontWeight: "600", marginBottom: "15px" }}>Support</h6>
            <div className="d-flex flex-column">
              <Link to="/support" className="mb-2 text-dark" style={{ textDecoration: "none" }}>Contact</Link>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Support portal</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Z-Connect blog</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>List of charges</a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>Downloads & resources</a>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 style={{ fontWeight: "600", marginBottom: "15px" }}>Account</h6>
            <div className="d-flex flex-column">
              <Link to="/signup" className="mb-2 text-dark" style={{ textDecoration: "none" }}>
                Open an account
              </Link>
              <Link to="/login" className="mb-2 text-dark" style={{ textDecoration: "none" }}>
                Login
              </Link>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>
                Fund transfer
              </a>
              <a className="mb-2 text-dark" style={{ textDecoration: "none" }}>
                60 day challenge
              </a>
            </div>
          </div>
        </div>

        {/* LEGAL TEXT */}
        <div className="mt-5 text-muted" style={{ fontSize: "12px", lineHeight: "1.6" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
            Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
