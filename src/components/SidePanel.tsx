import { useTables } from "../hooks/useTables";
import { type TableData } from "../contexts/TableContext";
import { TableForm } from "./TableForm";
import { Modal } from "./Modal";
import { useState } from "react";
import { NoTableSelected } from "./NoTableSelected";

const btnBase =
  "flex h-8 flex-1 items-center justify-center rounded-md px-3 py-1.5 text-[13px] transition-all cursor-pointer";
export const btnActive = `${btnBase} bg-white font-medium text-[#101827] shadow-[0_1px_3px_rgba(0,0,0,0.08)]`;
export const btnInactive = `${btnBase} text-[#69717E] hover:text-[#101827]`;

export const SidePanel = () => {
  const { tables, activeTable, draft, selectedId, setSelectedId, setTables } =
    useTables();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId =
      tables.length > 0 ? Math.max(...tables.map((t) => t.id)) + 1 : 1;

    const newTable = {
      ...draft,
      type: draft.type as "snooker" | "air-hockey" | "foosball",
      category: draft.category as "normal" | "competition" | "kids",
      id: newId,
      position: { x: 50, y: 50 },
    };

    setTables((prevTables) => [...prevTables, newTable as TableData]);
    setSelectedId(newId);
    setIsModalOpen(false);
  };

  const handleEditSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedId === null) return;

    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === selectedId
          ? {
              ...table,
              ...draft,
              type: draft.type as "snooker" | "air-hockey" | "foosball",
              category: draft.category as "normal" | "competition" | "kids",
            }
          : table,
      ),
    );
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setTables((prevTables) => prevTables.filter((t) => t.id !== selectedId));
    setSelectedId(null);
  };

  return (
    <>
      <div className="flex w-full lg:w-[288px] flex-col gap-3 shrink-0">
        <div className="flex h-10 w-full items-center rounded-lg bg-[#F7F8FA] p-1">
          <button
            onClick={() => {
              setSelectedId(null);
              setIsModalOpen(true);
            }}
            className={activeTable ? btnInactive : btnActive}
          >
            Új asztal
          </button>
          <button className={activeTable ? btnActive : btnInactive}>
            Asztal adatai
          </button>
        </div>

        {activeTable ? (
          <TableForm
            title="Asztal adatai"
            submitLabel="Asztal mentése"
            handleSubmit={handleEditSubmit}
            handleDelete={handleDelete}
          />
        ) : (
          <NoTableSelected />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Új asztal"
      >
        <div className="flex w-full lg:w-[288px] flex-col gap-3 shrink-0">
          <div className="flex flex-col rounded-xl border border-[#E5E7EA] bg-white">
            <TableForm
              title={null}
              submitLabel="Új asztal elhelyezése"
              handleSubmit={handleNewSubmit}
              handleDelete={null}
            ></TableForm>
          </div>
        </div>
      </Modal>
    </>
  );
};
