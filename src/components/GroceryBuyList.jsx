import React from "react";

import GroceryItem from "./GroceryItem";

export default function GroceryBuyList(props) {
  return (
    <div id="groceryBuyItems">
      {props.buyGroceryItems.map((groceryItem) => (
        <GroceryItem
          key={groceryItem.itemName}
          itemName={groceryItem.itemName}
          onClick={props.onPurchaseItem}
        />
      ))}
    </div>
  );
}
