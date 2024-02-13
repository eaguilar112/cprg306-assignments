import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-gray-300 p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
      <p className="text-gray-600">Category: {category}</p>
    </li>
  );
};

export default Item;