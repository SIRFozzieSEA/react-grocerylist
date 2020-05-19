import React, { useState } from "react";

export default function GroceryAddHeader(props) {
  const [groceryItem, setGroceryItem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (groceryItem.length > 0) {
      props.onAddItemToBuy(groceryItem);
    }
    setGroceryItem("");
  };

  const onChange = (e) => {
    setGroceryItem(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="item"
        style={{ flex: "10", padding: "5px", marginRight: "5px" }}
        placeholder="Add Grocery Item..."
        value={groceryItem}
        onChange={onChange}
      />
      <input type="submit" value="Add" style={{ flex: "1" }} />
    </form>
  );
}
