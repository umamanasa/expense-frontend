import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Container, Typography } from '@material-ui/core';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = async () => {
    try {
      const response = await axios.post('/api/transaction', {
        amount,
        desc: description,
      });
      console.log(response.data);
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
    } catch (error) {
      console.error('Error deleting transactions:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add Expense</Typography>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAdd} style={{ marginRight: '10px' }}>
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete All
      </Button>
    </Container>
  );
};

export default AddExpense;
