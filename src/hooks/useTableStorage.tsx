import { useState } from "react";
import { type TableData } from "../contexts/TableContext";
import initialData from "../data/tables.json";

export const useTableStorage = () => {
  const [tables, setTables] = useState<TableData[]>(() => {
    try {
      const localData = localStorage.getItem("roomlie-tables");
      if (localData) {
        return JSON.parse(localData);
      }

      return initialData as TableData[];
    } catch (error) {
      console.error("Adatbetöltési hiba, üres teremmel indulunk:", error);
      return [];
    }
  });

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem("roomlie-tables", JSON.stringify(tables));
      console.log("Asztalok sikeresen mentve!");
    } catch (error) {
      console.error("Nem sikerült a mentés:", error);
    }
  };

  const resetToInitial = () => {
    setTables(initialData as TableData[]);
    localStorage.removeItem("roomlie-tables");
  };

  return { tables, setTables, saveToLocalStorage, resetToInitial };
};
