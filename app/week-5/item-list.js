"use client"

import React, { useState } from 'react';
import Item from './item.js';

import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items array based on the sortBy state variable
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Function to handle sorting preference change
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      {/* Sort buttons */}
      <button
        onClick={() => handleSortChange('name')}
        style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => handleSortChange('category')}
        style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
      >
        Sort by Category
      </button>

      {/* Render the items */}
      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
};

export default ItemList;
