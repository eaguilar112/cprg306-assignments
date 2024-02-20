import React, { useState} from "react";
import Item from "./item";
import data from "./items.json";

function SortItems () {
  const [sortBy, setSortBy] = useState("name");

  const items = ['name', 'category']

  function handleClick(item) {
    if (sortBy === item) {
      // Arrange code
    };
  };

    return (
        <div className="category buttons">
          <button
            type="onClick"
            className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Name
          </button>
          <button
            type="onClick"
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Category
          </button>
        </div>
      );
};

export default ItemList;