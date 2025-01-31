import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

interface Dispatch {
  type: string;
  payload?: any;
}

interface Expenses {
  id: number;
  name: string;
  cost: number;
}

interface Props {
  id: number;
  name: string;
  cost: number;
}

function ExpenseItem(props: Props) {
  const { dispatch } = useContext(AppContext) as {
    dispatch: (action: { type: string; payload?: any }) => void;
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary  badge-pill mr-3'">
          {" "}
          €{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
}

export default ExpenseItem;
