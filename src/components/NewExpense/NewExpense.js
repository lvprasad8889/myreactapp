import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [isEditing,setEditing]=useState(false)
    const saveExpenseDataHandler=(enteredData)=>{
        const expenseDataOfExpenseForm={
            ...enteredData,
            id:Math.random().toString()
        }   
        props.onAddExpense(expenseDataOfExpenseForm)
    }
    const startEditingHandler=()=>{
        setEditing(true)
    }

    const stopEditingHandler=()=>{
        setEditing(false)
    }

    return(
        <div className="new-expense">
            {!isEditing  &&<button className="btn btn-info d-block mx-auto" onClick={startEditingHandler}>Add Expense Data</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveEnteredData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;