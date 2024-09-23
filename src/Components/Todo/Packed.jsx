/* eslint-disable react/prop-types */
const Packed = ({ item, onDeleteItem, onUpdateItem }) => {
  return (
    <li className="flex items-center" key={item.id}>
      <input
        className="mr-2 cursor-pointer size-4"
        type="checkbox"
        value={item.packed}
        onClick={() => onUpdateItem(item.id)}
      />

      <span
        className={`cursor-pointer font-medium break-all text-sm sm:text-base  ${
          item.packed ? "line-through" : "underline underline-offset-2"
        }`}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="ml-2">
        ❌
      </button>
    </li>
  );
};

export default Packed;
