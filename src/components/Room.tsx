import { useTables } from "../hooks/useTables";
import { Table } from "./Table";

export const Room = () => {
  const { tables, roomRef, roomDimensions } = useTables();

  return (
    <div
      ref={roomRef}
      className="relative bg-gray-200 border-4 border-gray-400 rounded-xl mt-12 shadow-inner shrink-0 transition-all duration-300"
      style={{ width: roomDimensions.width, height: roomDimensions.height }}
    >
      {tables.map((table) => (
        <Table key={table.id} table={table} />
      ))}
    </div>
  );
};
