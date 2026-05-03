import { useContext } from "react";
import { TableContext } from "../contexts/TableContext";

export const useTables = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error(
      "A useTables hookot csak a TableProvider-en belül lehet használni!",
    );
  }
  return context;
};
