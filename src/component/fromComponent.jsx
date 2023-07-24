/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

const fromComponent = ({value}) => {

  const [newItemText, setNewItemText] = useState('');
 
  const [items, setItems] = useState([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ]);
  
    


  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    if (newItemText.trim() === '') {
      return; 
    }

    const newItem = {
      id: Date.now(), 
      text: newItemText,
    };

    setItems([...items, newItem]);
    setNewItemText('');
  };

  return (
    <div className="container mx-auto px-4 mt-8">
    <div className="mb-4">
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={value}
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
        onClick={addItem}
      >
        Add Item
      </button>
    </div>
    <ul>
      {items.map(item => (
        <li key={item.id} className="flex items-center justify-between py-2 border-b">
          <span>{item.text}</span>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}
export default fromComponent;
