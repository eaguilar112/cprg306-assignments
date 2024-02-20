import Item from './item.js';
import items from './items.json';

const ItemList = () => {
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

      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
