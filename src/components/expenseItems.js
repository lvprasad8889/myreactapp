import React,{useState} from 'react'
import './ExpenseItem.css';
import ExpenseData from './ExpenseDate';
import Card from './Card';


function ExpenseItems(props) {

    
    
  return (
    <Card className="expense-item">
        <ExpenseData date={props.date}/>
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button  className="btn btn-info">change title</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItems;
