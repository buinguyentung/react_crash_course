import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 11, 12);
  // const expenseTitle = 'BBQ Dinner';
  // const expenseAmount = 30.67;
  
  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  // const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
