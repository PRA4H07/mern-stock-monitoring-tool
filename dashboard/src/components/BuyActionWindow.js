import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleOrderClick = () => {
    const token = localStorage.getItem("token");

    axios.post(
        "https://mern-stock-monitoring-tool.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        console.log(`${mode} Order placed successfully`);
        closeBuyWindow();
      })
      .catch((err) => {
        console.error("Error placing order:", err.response?.data || err.message);
      });
  };

  return (
    <div className={`container ${mode === "SELL" ? "sell-window" : ""}`} id="buy-window">
      <div className="regular-order">
        <h4 style={{ color: mode === "BUY" ? "#4184f3" : "#ff5722" }}>{mode} {uid}</h4>
        
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" step="0.05" value={stockPrice} onChange={(e) => setStockPrice(e.target.value)} />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button 
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-orange"}`} 
            onClick={handleOrderClick}
          >
            {mode}
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
