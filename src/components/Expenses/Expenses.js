import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [itemList, setItemList] = useState([]);

  const ExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setItemList(() => {
    //   console.log("value");
    //   return props.items.filter(
    //     (item) => item.date.getFullYear() === filteredYear
    //   );
    // });
    // console.log(itemList);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses.length);
  // const myStyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontSize: "20px",
  //   fontFamily: "Arial",
  // };
  // let expensesContent = <p style={myStyle}>No Expenses Found</p>;
  // if (filteredExpenses.length) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilter={ExpenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {filteredExpenses.length ? (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        ) : (
          <div style={myStyle}>No Expenses Found</div>
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
