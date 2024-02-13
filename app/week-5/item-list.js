import React from "react";
import data from "./items.json"

function ItemList() {
return (
    <ul>
      {data.map((item, index) => (
        <data
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;