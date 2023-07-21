import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';


function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
      <>
      <div>
      <h1>Dropdown Example</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <p>User Selected : {selectedOption}</p>

      
    </div>
      
      
      
      </>
  );
}


export default App;
