// src/Dashboard.js

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the sample JSON file
    axios
      .get("/online_retail.json")
      .then((response) => setUsers(response.data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>User Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>StockCode</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>InvoiceDate</th>
            <th>Price</th>
            <th>Customer ID</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.invoice}</td>
              <td>{user.stockcode}</td>
              <td>{user.description}</td>
              <td>{user.quantity}</td>
              <td>{user.invoicedate}</td>
              <td>{user.price}</td>
              <td>{user.customerid}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
