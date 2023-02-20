//import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpsenseDate";
import Card from "../UI/Card";

/*
// dynamically data
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}*/

// props data
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React')
  // let title = props.title;

  /*const clickHandler = () => {
    // title = 'updated!';
    setTitle('Updated!');
    console.log(title);
  }; */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
