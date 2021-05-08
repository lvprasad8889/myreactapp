import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import { useState } from "react";

function Expense(props) {
  const [filterYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()==filterYear;
  })

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItems
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
