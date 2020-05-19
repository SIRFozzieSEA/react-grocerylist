import React from "react";

import GroceryItem from "./GroceryItem";

export default function GroceryBoughtList(props) {
  return (
    <div id="groceryBoughtItems">
      {props.boughtGroceryItems.map((groceryItem) => (
        <GroceryItem
          key={groceryItem.itemName}
          itemName={groceryItem.itemName}
          onClick={props.onUnPurchaseItem}
        />
      ))}
    </div>
  );
}
