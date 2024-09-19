import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Expenses {
  id: number;
  name: string;
  cost: number;
}

function Remaining() {
  //const { expenses, budget } = useContext(AppContext);
  const { expenses, budget } = useContext(AppContext) as {
    expenses: Expenses[];
    budget: number;
  };

  const totalExpenses = expenses.reduce((total: number, item: any) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining {budget - totalExpenses}€</span>
    </div>
  );
}

export default Remaining;
