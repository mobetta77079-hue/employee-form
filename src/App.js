import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm'; // Import your form component

function App() {
  return (
    <div className="App">
      <h1>New Employee Form</h1>
      <EmployeeForm /> {/* Render the form */}
    </div>
  );
}

export default App;