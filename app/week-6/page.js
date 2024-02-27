import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

function Page() {
  return (
    <main className="container mx-auto px-4 py-8" style={{ backgroundColor: '#5297ff'}}>
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;