import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  //Handling multiple States
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //Using one State instead
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    //Handling multiple States
    setEnteredTitle(event.target.value);
    //Using one State instead
    // setUserInput({
    //   ...userInput, //Retain the other values
    //   enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //Do not reload the page
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    // console.log(expenseData)
    //invoke child-to-parent component communication
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type='date' min="2022-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
