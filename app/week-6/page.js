"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: '#5297ff'}}>
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Page;