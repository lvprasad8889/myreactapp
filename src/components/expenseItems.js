import './expenseItem.css';
import ExpenseData from './expenseDate';
function expensiveItems(props) {
    const expenseDate=new Date(2021,2,28);
    const expenseTitle="Car Insurance";
    const expenseAmount=300.23;
    
  return (
    <div className="expense-item">
        <ExpenseData date={props.date}/>
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div>
      
    </div>
  );
}

export default expensiveItems;
