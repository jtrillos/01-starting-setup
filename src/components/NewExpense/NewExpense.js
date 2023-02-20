import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isModifying, setIsModifying] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsModifying(false);
  };

  const startEditHandler = () => {
    setIsModifying(true);
  };

  const stopModifyHandler = () => {
    setIsModifying(false);
  };

  let showContent;
  if (isModifying) {
    showContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopModifyHandler}
      />
    );
  } else {
    showContent = <button onClick={startEditHandler}>Add New Expense</button>;
  }

  return <div className="new-expense">{showContent}</div>;
};

export default NewExpense;
