import React from "react";

export default function GroceryBoughtHeader(props) {
  if (props.boughtGroceryItems.length > 0) {
    return (
      <div className="lightBlueHeader" style={{ display: "flex" }}>
        <font style={{ flex: "10" }}>Items Bought</font>
        <button onClick={props.onClearBoughtItems} className="simulatedLink">
          Remove All Bought
        </button>
      </div>
    );
  }
  return <div></div>;
}
