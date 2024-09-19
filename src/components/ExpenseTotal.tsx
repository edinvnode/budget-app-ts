import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Expenses {
  id: number;
  name: string;
  cost: number;
}

function ExpenseTotal() {
  const { expenses } = useContext(AppContext) as {
    expenses: Expenses[];
    budget: number;
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: {totalExpenses}€</span>
    </div>
  );
}

export default ExpenseTotal;
