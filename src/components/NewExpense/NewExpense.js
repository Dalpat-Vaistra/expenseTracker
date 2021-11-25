import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(true);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setFlag(true);
  };
  const onCancelHandler = () => {
    setFlag(true);
  };
  const AddNewExpenseHandler = () => {
    setFlag(false);
  };
  return (
    <div className="new-expense">
      {flag ? (
        <button onClick={AddNewExpenseHandler}> Add New Expense </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
