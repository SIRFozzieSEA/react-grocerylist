import React, { useState, useEffect } from "react";
import "./index.css";

import GroceryHeader from "./components/GroceryHeader";
import GroceryAddHeader from "./components/GroceryAddHeader";
import GroceryBuyHeader from "./components/GroceryBuyHeader";
import GroceryBuyList from "./components/GroceryBuyList";
import GroceryBoughtHeader from "./components/GroceryBoughtHeader";
import GroceryBoughtList from "./components/GroceryBoughtList";
import Axios from "axios";

export default function App() {
  const [buyGroceryItems, setBuyGroceryItems] = useState([]);
  const [boughtGroceryItems, setBoughtGroceryItems] = useState([]);

  const apiEndpoint = "http://ec2-3-84-78-247.compute-1.amazonaws.com/json/";
  const userName = "stephan";
  const tableName = "grocery_list";

  useEffect(() => {
    Axios.get(apiEndpoint + "?user=" + userName + "&table=" + tableName)
      .then((res) => {
        setBuyGroceryItems(res.data.buyGroceryItems);
        setBoughtGroceryItems(res.data.boughtGroceryItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSaveGroceryList = () => {
    const payload = {
      userName: userName,
      tableName: tableName,
      buyGroceryItems: buyGroceryItems,
      boughtGroceryItems: boughtGroceryItems,
    };
    Axios.post(apiEndpoint, payload)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(payload);
  };

  const onAddItemToBuy = (itemName) => {
    itemName = capitalize(itemName);
    const newPurchaseItems = buyGroceryItems.filter(function (item) {
      return item.itemName !== itemName;
    });
    const newPurchaseItemsTwo = [...newPurchaseItems, { itemName: itemName }];
    setBuyGroceryItems(sortGroceryItems(newPurchaseItemsTwo));

    const newBoughtItems = boughtGroceryItems.filter(function (item) {
      return item.itemName !== itemName;
    });
    setBoughtGroceryItems(sortGroceryItems(newBoughtItems));
  };

  const onPurchaseItem = (itemName) => {
    itemName = capitalize(itemName);
    const newPurchaseItems = buyGroceryItems.filter(function (item) {
      return item.itemName !== itemName;
    });
    setBuyGroceryItems(sortGroceryItems(newPurchaseItems));

    const newBoughtItems = [...boughtGroceryItems, { itemName: itemName }];
    setBoughtGroceryItems(sortGroceryItems(newBoughtItems));
  };

  const onUnPurchaseItem = (itemName) => {
    itemName = capitalize(itemName);
    const newBoughtItems = boughtGroceryItems.filter(function (item) {
      return item.itemName !== itemName;
    });
    setBoughtGroceryItems(sortGroceryItems(newBoughtItems));

    const newPurchaseItems = [...buyGroceryItems, { itemName: itemName }];
    setBuyGroceryItems(sortGroceryItems(newPurchaseItems));
  };

  const sortGroceryItems = (groceryItems) => {
    return groceryItems.sort(function (a, b) {
      if (a.itemName.toLowerCase() < b.itemName.toLowerCase()) return -1;
      if (a.itemName.toLowerCase() > b.itemName.toLowerCase()) return 1;
      return 0;
    });
  };

  const capitalize = (str) => {
    if (str !== undefined) {
      if (typeof str !== "string") return "";
      str = str.split(" ");
      for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }
      return str.join(" ");
    }
  };

  const onClearBoughtItems = () => {
    setBoughtGroceryItems([]);
  };

  const onUnloadCleanup = () => {
    alert("Hello!");
    console.log("unloading");
    return "unloading";
  };

  return (
    <div className="App">
      <GroceryHeader />
      <GroceryAddHeader onAddItemToBuy={onAddItemToBuy} />
      <GroceryBuyHeader
        onSaveGroceryList={onSaveGroceryList}
        buyGroceryItems={buyGroceryItems}
      />
      <GroceryBuyList
        onPurchaseItem={onPurchaseItem}
        buyGroceryItems={buyGroceryItems}
      />
      <GroceryBoughtHeader
        onClearBoughtItems={onClearBoughtItems}
        boughtGroceryItems={boughtGroceryItems}
      />
      <GroceryBoughtList
        onUnPurchaseItem={onUnPurchaseItem}
        boughtGroceryItems={boughtGroceryItems}
      />
    </div>
  );
}
