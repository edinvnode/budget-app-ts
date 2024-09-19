import { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define types for expense and state
type Expense = {
  id: number;
  name: string;
  cost: number;
};

type AppState = {
  budget: number;
  expenses: Expense[];
};

// Define the types for actions
type Action =
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "DELETE_EXPENSE"; payload: number };

// Define the AppReducer with typed state and action
const AppReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Define the initial state with types
const initialState: AppState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "Shopping", cost: 50 },
    { id: 13, name: "Holiday", cost: 500 },
    { id: 14, name: "Car wash", cost: 500 },
  ],
};

// Define the type for the context value
type AppContextType = {
  budget: number;
  expenses: Expense[];
  dispatch: Dispatch<Action>;
};

// Create the context with an undefined default value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the props type for AppProvider
type AppProviderProps = {
  children: ReactNode;
};

// Create the AppProvider with typed children prop
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
