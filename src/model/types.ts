// Define AppContextType
interface AppContextType {
  budget: number;
  expenses: { id: number; name: string; cost: number };
  // Add more properties as needed
}

// Then export it (if needed in other places)
export type { AppContextType };
