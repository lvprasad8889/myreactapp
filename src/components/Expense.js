import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import { useState } from "react";
import ExpenseList from './ExpensesList';

function Expense(props) {
  const [filterYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        
        < ExpenseList items={filteredExpenses} />
       
      </Card>
    </div>
  );
}

export default Expense;
