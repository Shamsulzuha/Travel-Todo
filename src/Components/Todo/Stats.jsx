/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Stats = ({ itemData }) => {
  if (!itemData.length)
    return (
      <p className="text-sm sm:text-xl p-3 sm:p-5 text-center bg-blue-500 text-white font-semibold">
        Start adding some items to your packing list 🛩
      </p>
    );

  const numItem = itemData.length;
  const packedItems = itemData.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItem) * 100);

  return (
    <div className="text-sm sm:text-xl p-3 sm:p-5 text-center bg-blue-500 text-white font-semibold">
      {percentage === 100
        ? "You got everything! Ready to go ✈"
        : ` You have ${numItem} items on your list 😍, and you already packed ${packedItems} (${percentage}%)`}
    </div>
  );
};

export default Stats;
