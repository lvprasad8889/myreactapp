import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveExpenseDataHandler=(enteredData)=>{
        const expenseDataOfExpenseForm={
            ...enteredData,
            id:Math.random().toString()
        }   
        props.onAddExpense(expenseDataOfExpenseForm)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveEnteredData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;