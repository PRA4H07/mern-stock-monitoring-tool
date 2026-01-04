import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleBuyClick = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        console.log("Order placed successfully");
        closeBuyWindow();
      })
      .catch((err) => {
        console.error(
          "Error placing order:",
          err.response?.data || err.message
        );
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              placeholder="0"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              placeholder="0.00"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
