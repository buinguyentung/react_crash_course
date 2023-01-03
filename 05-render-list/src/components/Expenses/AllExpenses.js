import { useState } from 'react';

import './AllExpenses.css'
// import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function AllExpenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020');

  const expenses = props.expenses;
  console.log('expenses in AllExpenses: ', expenses)

  const onExpensesFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
  }

  // get filtered expenses
  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  // console.log('filteredExpenses: ', filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onValueSelected={onExpensesFilterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default AllExpenses;