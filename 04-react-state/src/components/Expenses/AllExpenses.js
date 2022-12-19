import { useState } from 'react';

import './AllExpenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function AllExpenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020');

  const expenses = props.expenses;

  const onExpensesFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onValueSelected={onExpensesFilterChangeHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default AllExpenses;