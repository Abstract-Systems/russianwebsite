import React, { useState } from 'react';
import './Form.css';

function MyForm() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Name:', fname, lname);
    console.log('Phone:', phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={fname}
          onChange={(event) => setfName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
            type="text"
            value={lname}
            onChange={(event) => setlName(event.target.value)}
        />
        </label>
      <br />
        <label>
        Phone:
        <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
        />
        </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
