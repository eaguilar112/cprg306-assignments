import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li className="bg-black text-white border border-black p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-green-600 mb-2">Quantity: {quantity}</p>
      <p className="text-green-600">Category: {category}</p>
    </li>
  );
};

export default Item;