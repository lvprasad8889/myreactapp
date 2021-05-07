import React,{useState} from 'react'
import './ExpenseItem.css';
import ExpenseData from './ExpenseDate';
import Card from './Card';


function ExpenseItems(props) {

  const [title,setTitle]=useState(props.title);

  const clickHandler=()=>{
        setTitle('updated');
        console.log(title)
    }
    
  return (
    <Card className="expense-item">
        <ExpenseData date={props.date}/>
      <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>change title</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItems;
