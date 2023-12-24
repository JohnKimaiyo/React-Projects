import React, { useState } from 'react';
import EmployeeList from './Components/EmployeeList';
import AddEmployeeForm from './Components/AddEmployeeForm';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="App">
      <h1>React CRUD App</h1>
      <AddEmployeeForm onAdd={handleAddEmployee} />
      <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
    </div>
  );
};

export default App;
