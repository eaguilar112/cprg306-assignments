import React from 'react';
import Item from './item';

function ItemList({ items }) {
    const handleDeleteItem = (idToDelete) => {
        const updatedItems = items.filter(item => item.id !== idToDelete);
        // Call a function to handle the updated items (e.g., setItems(updatedItems))
        // or dispatch an action to update state if using Redux
    };

    const handleEditItem = (idToEdit, updatedItemData) => {
        const updatedItems = items.map(item => {
            if (item.id === idToEdit) {
                return { ...item, ...updatedItemData };
            }
            return item;
        });
        // Call a function to handle the updated items (e.g., setItems(updatedItems))
        // or dispatch an action to update state if using Redux
    };

    return (
        <div>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onDeleteItem={handleDeleteItem}
                    onEditItem={handleEditItem}
                />
            ))}
        </div>
    );
}

export default ItemList;
