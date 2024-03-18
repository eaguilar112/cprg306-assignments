"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (id) => {
      let itemBuffer = items.find((item) => item.id === id).name;
      if (itemBuffer.includes(",")) 
      {
          itemBuffer = itemBuffer.split(",")[0];
      }
      itemBuffer = itemBuffer.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g , '');
      itemBuffer = itemBuffer.trim();
      setSelectedItem(itemBuffer);
    }

    return (
      <main className=' bg-slate'>
        <h1 className='text-3xl font-bold m-2 mt-0e'>Shopping List</h1>
        <div className="text-white flex">
          <div className="flex-1 max-w-md">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}onItemSelect={handleItemSelect}/>
          </div>
          <div className="flex-1 max-w-md">
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
    </main>
  )}