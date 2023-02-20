import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChange = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filterMap = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChange} />
        <ExpensesChart expenses={filterMap} />
        <ExpensesList items={filterMap} />
      </Card>
    </div>
  );
};

export default Expenses;
