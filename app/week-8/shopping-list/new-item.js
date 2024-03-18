"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newId = Math.floor(Math.random() * 1000000);
        const Item = { id: newId, name, quantity, category };

        onAddItem(Item);

        setName("");
        setQuantity("1");
        setCategory("produce");
    }

    return(
        <main className="flex justify-left w-full">
           <form onSubmit={handleSubmit} className="p-2 text-black max-w-sm w-full">
                <h2 className="text-xl font-bold text-white">Add New Item</h2>
                <div className="mAb-2">
                    <input type="text" placeholder="Item name" value={name} className="w-full mt-1 border-2 border-gray-300 p-2 mb-2 rounded-lg font-sans" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="flex justify-between">
                    <input type="number" min="1" max="100" placeholder="Quantity" value={quantity}  className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" onChange={(event) => setQuantity(event.target.value)} />
                    <select value={category} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" onChange={(event) => setCategory(event.target.value)}>
                        <option value="" disabled=" " >Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="meat">Meat</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="snacks">Snacks</option>
                        <option value="beverages">Beverages</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="w-full mt-4 py-2 px-4 mb-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
                </div>                 
            </form>
        </main>
        );
};