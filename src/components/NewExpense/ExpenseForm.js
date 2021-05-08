import './ExpenseForm.css';
import React,{useState} from 'react';
import ExpenseDate from '../ExpenseDate';

function ExpenseForm(props){
    const [enteredTitle ,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setInput]=useState({
    //     enteredTilte:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler=(event)=>{
     setEnteredTitle(event.target.value)
            // setInput((prevStates)=>{
            //     return{...prevStates,enteredTilte:event.target.value}
            // })
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        // setInput((prevStates)=>{
        //     return{...prevStates,enteredAmount:event.target.value}
        // })
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
        // setInput((prevStates)=>{
        //     return{...prevStates,enteredDate:event.target.value}
        // })
    }
    const submitHandler=(event)=>{
        //to stop reloading on submitting
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveEnteredData(expenseData)
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate}
                    onChange={dateChangeHandler}/>

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" className="btn btn-info">
                    Add Expensive
                    </button>
            </div>
        </form>
    )
}

export default ExpenseForm;