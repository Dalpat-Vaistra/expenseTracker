import React, { useState } from "react";
import "./App.css";
// import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
// import Card from "./components/UI/Card";

const DUMMY_EXPENSES = [
  {
    id: "01",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "02", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "03",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "04",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In APP.js");
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  // return React.createElement({
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get Started!'),
  //   React.createElement(Expense, { items: expenses },)
  // })

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpensesFilter /> */}
      {/* <Card className="expenses"> */}
      <Expenses items={expenses} />
      {/* </Card> */}
    </div>
  );
}

export default App;
