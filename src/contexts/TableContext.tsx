import { createContext } from "react";

export interface TableData {
  id: number;
  name: string;
  type: TableType;
  category: TableCategory;
  color: string;
  status: number;
  position: { x: number; y: number };
  "is-locked": boolean;
}

export type TableType = "snooker" | "air-hockey" | "foosball";
export type TableCategory = "competition" | "normal" | "kids";

interface TableContextType {
  tables: TableData[];
  setTables: React.Dispatch<React.SetStateAction<TableData[]>>;
  activeTable: TableData | null | undefined;
  draft: TableData;
  setDraft: React.Dispatch<React.SetStateAction<TableData>>;
  resetTablesData: () => void;
  updateTablePosition: (id: number, x: number, y: number) => void;
  defaultNewTable: Omit<TableData, "id">;
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  saveToLocalStorage: () => void;
  roomRef: React.RefObject<HTMLDivElement | null>;
  roomDimensions: { width: number; height: number };
  setRoomDimensions: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
}

export const TableContext = createContext<TableContextType | undefined>(
  undefined,
);
