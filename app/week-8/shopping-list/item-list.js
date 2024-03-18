"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const itemsCopy = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } 
        else {
            return a.category.localeCompare(b.category);
        }
    });
    return(
        <main>
        <div>
            <label htmlFor="sort">Sort by:</label>
            <button className={`bg-${sortBy === "name" ? "orange-500" : "orange-700"} p-1 m-2 w-28 text-white`} onClick={() => setSortBy("name")}>Name</button>
            <button className={`bg-${sortBy === "category" ?  "orange-500" : "orange-700"} p-1 m-2 w-28 text-white`} onClick={() => setSortBy("category")}>Category</button>
        </div>
        {itemsCopy.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
        ))}
        </main>
    );}