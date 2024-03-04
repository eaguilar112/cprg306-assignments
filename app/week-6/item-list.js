"use client"

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({items}) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      Sort By:
      <button
        onClick={() => handleSortChange('name')}
        style={{ backgroundColor: sortBy === 'name' ? 'blue' : 'white', borderRadius: '5px', margin: '10px', padding: '10px', color: sortBy === 'name' ? 'black' : 'green' }}
      >
        Name
      </button>
      <button
        onClick={() => handleSortChange('category')}
        style={{ backgroundColor: sortBy === 'category' ? 'blue' : 'white', borderRadius: '5px', margin: '10px', padding: '10px', color: sortBy === 'category' ? 'black' : 'green' }}
      >
        Category
      </button>

      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
};

export default ItemList;
