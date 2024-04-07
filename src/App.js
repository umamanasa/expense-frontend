import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// In App.js
import Home from './components/Home';
import AddExpense from './components/AddExpense';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
    </Router>
  );
};

export default App;
