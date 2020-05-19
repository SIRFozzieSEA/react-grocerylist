import React from "react";

export default function GroceryBuyHeader(props) {
  if (props.buyGroceryItems.length > 0) {
    return (
      <div className="lightBlueHeader" style={{ display: "flex" }}>
        <font style={{ flex: "10" }}>Items to Buy</font>
        <button onClick={props.onSaveGroceryList} className="simulatedLink">
          Save Grocery List
        </button>
      </div>
    );
  }
  return <div></div>;
}
