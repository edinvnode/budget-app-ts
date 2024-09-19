import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext) as {
    budget: number;
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: €{budget}</span>
    </div>
  );
}

export default Budget;
