import { useState } from 'react';

import './App.css';
import AllExpenses from './components/Expenses/AllExpenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    console.log('in App.js ', expenseData);
    setExpenses(previousExpenses => {
      console.log('Previous expenses: ', previousExpenses);
      return [expenseData, ...previousExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <AllExpenses expenses={expenses}/>
    </div>
  );
}

export default App;
