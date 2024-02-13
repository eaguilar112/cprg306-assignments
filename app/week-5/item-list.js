import React from "react";
import Item from "./item";
import data from "./items.json";

function ItemList () {
    return (
        <ul>
          {data.map((item, index) => (
            <Item
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