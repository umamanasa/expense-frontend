import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get('/api/transaction');
      setExpenses(response.data.result);
    };
    fetchExpenses();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await axios.post('/api/transaction', {
        amount,
        desc: description,
      });
      console.log(response.data);
      // Update the table with the new expense
      setExpenses([...expenses, { amount, description }]);
      // Clear the form fields
      setAmount('');
      setDescription('');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('/api/transaction');
      console.log(response.data);
      // Clear the table
      setExpenses([]);
    } catch (error) {
      console.error('Error deleting transactions:', error);
    }
  };

  return (
    <div className="content">
      <Container maxWidth="sm">
        <Button variant="contained" color="secondary" onClick={handleDelete} style={{ marginBottom: '20px' }}>
          Delete All
        </Button>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginRight: '10px', backgroundColor: 'white' }}
            InputLabelProps={{
              style: { color: '#757575' },
            }}
          />
          <TextField
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginRight: '10px', backgroundColor: 'white' }}
            InputLabelProps={{
              style: { color: '#757575' },
            }}
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell>{expense.amount}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AddExpense;
