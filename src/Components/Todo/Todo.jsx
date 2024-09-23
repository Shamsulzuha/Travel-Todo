import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const Todo = () => {
  const [itemData, setItemData] = useState([]);

  // Add Data
  const handleData = (item) => {
    setItemData([...itemData, item]);
  };

  // Delete Data
  const handleDeleteItem = (id) => {
    setItemData(itemData.filter((delItem) => delItem.id !== id));
  };

  // Update Data
  const handleUpdateItem = (id) => {
    setItemData(
      itemData.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Clear Data
  const handleClear = () => {
    const confirmed = confirm("Are you sure! you want to clear all items.");

    if (confirmed) setItemData([]);
  };

  return (
    <div>
      <Logo />
      <Form onAddData={handleData} />
      <PackingList
        itemData={itemData}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearData={handleClear}
      />
      <Stats itemData={itemData} />
    </div>
  );
};

export default Todo;
