/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onAddData }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const data = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddData(data);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-purple-600 text-sm md:text-base p-4 md:p-5 flex flex-col md:flex md:flex-row items-center gap-4 md:gap-10 justify-center"
    >
      <p className="text-white font-medium font-[Monoton]">
        What do you need for 👻 trip?
      </p>
      <div className="flex gap-1 md:gap-3">
        <select
          className="px-2 border-2 border-blue-500 text-blue-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out custom-scrollbar"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option
              className="bg-white text-blue-800 hover:bg-blue-500 hover:text-white"
              key={num}
              value={num}
            >
              {num}
            </option>
          ))}
          {/* <option value="1">1</option>*/}◘
        </select>
        <input
          className="px-2 border-2 border-blue-500 text-blue-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item"
        />
        <button className="primary-btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
