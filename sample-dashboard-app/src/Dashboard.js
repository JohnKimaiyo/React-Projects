// src/Dashboard.js

import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the sample JSON file
    axios.get('/data.json')
      .then(response => setUsers(response.data.users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App"> 
      <h1>User Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
