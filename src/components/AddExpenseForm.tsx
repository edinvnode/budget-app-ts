import React, { useState, useContext, FormEvent } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext) as {
    dispatch: (action: { type: string; payload?: any }) => void;
  };
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
