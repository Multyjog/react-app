import { useState } from "react";

interface IPropsList {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: IPropsList) {
  const isEmptyList = !items.length && <p>No items</p>;
  //   let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>My list of {heading}</h1>
      {isEmptyList}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
