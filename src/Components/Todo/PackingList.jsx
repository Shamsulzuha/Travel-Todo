/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Packed from "./Packed";

const PackingList = ({ itemData, onDeleteItem, onUpdateItem, onClearData }) => {
  const [sortBy, setSortBy] = useState("input");

  // let sortItems;

  // if (sortBy === "input") sortItems = itemData;

  // if (sortBy === "desc")
  //   sortItems = itemData
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));

  // if (sortBy === "packed")
  //   sortItems = itemData.slice().sort((a, b) => a.packed - b.packed);

  let sortItems;
  switch (sortBy) {
    case "input":
      sortItems = itemData;
      break;

    case "desc":
      sortItems = itemData
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortItems = itemData.slice().sort((a, b) => a.packed - b.packed);
      break;

    default:
      sortItems = itemData;
      break;
  }

  return (
    <div className="min-h-[400px] h-full p-3 md:p-5 bg-amber-800 text-white relative">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-32">
        {sortItems.map((item) => {
          return (
            <Packed
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          );
        })}
      </ul>
      <div className="absolute bottom-24 right-[50%] transform translate-x-[50%] flex gap-3">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm sm:text-base px-2 py-1 border-2 border-blue-500 text-blue-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out"
        >
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="primary-btn" onClick={onClearData}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default PackingList;
