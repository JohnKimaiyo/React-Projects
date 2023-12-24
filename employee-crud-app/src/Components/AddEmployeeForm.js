import React, { useState } from 'react';

const AddEmployeeForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position) {
      onAdd({ name, position });
      setName('');
      setPosition('');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
