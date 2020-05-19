import React from "react";

export default function GroceryItem(props) {
  return (
    <div
      className="groceryItem"
      onClick={props.onClick.bind(this, props.itemName)}
    >
      &#8226; {props.itemName}
    </div>
  );
}
