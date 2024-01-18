import { useState } from "react";
import OrganizerInputs from "./OrganizerInputs";
import OrganizerTable from "./OrganizerTable";
import { IExpence } from "./interfaces.ts";

const ExpenceOrganizer = () => {
  const [expences, setExpences] = useState<IExpence[]>([]);
  const [category, setCategory] = useState({ name: "", value: "" });

  const categories = [
    { name: "Property", value: "property" },
    { name: "Groceries", value: "groceries" },
    { name: "Health", value: "health" },
  ];
  const handleExpenceSubmit = (expence: IExpence) => {
    setExpences([
      ...expences,
      { ...expence, id: Math.floor(Math.random() * 1000) },
    ]);
  };
  const deleteExpence = (expence: IExpence) => {
    const newList = [...expences.filter((el) => el.id !== expence.id)];
    setExpences(newList);
  };
  return (
    <>
      <OrganizerInputs
        categories={categories}
        onExpenceSubmit={handleExpenceSubmit}
      />
      <div className="mt-5">
        <OrganizerTable
          categoryToDisplay={category}
          onExpenceDelete={(event) => deleteExpence(event)}
          categoryChanged={(event) => setCategory(event)}
          categories={categories}
          expencesList={expences}
        />
      </div>
    </>
  );
};

export default ExpenceOrganizer;
