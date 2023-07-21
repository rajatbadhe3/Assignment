import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [value, setValue] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:3004/users')
            .then((response) => response.json())
            .then((data) => setOptions(data))
            .catch((error) => console.log(error));
    }, []);


    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:3004/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, []);

    var prevvalue;
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        prevvalue = event.target.value;

    };

    const handleAddButtonClick = () => {
        setValue((prevvalue) => prevvalue + 100);
        console.log(prevvalue)
    };

    return (
        <div>
            <h1>Credit Debit APP</h1>
            <hr></hr>
            <h4>Select A Person</h4>
            <Form.Select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.id} value={option.Amount}>
                        {option.first_name} {option.last_name}
                    </option>
                ))}
            </Form.Select>
            <p>Amount : {selectedOption}</p>

            <div>
                <Button  variant="primary"  onClick={handleAddButtonClick}>
                    Credit
                </Button>
                <p>Value: {value}</p>
            </div>
            <div>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.Amount}</td>
              </tr>
          ))}
        </tbody>
      </Table>    
            </div>
        </div>
    );
}

export default App;
