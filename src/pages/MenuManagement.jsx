import React, { useState } from "react";
import MenuForm from "../components/MenuForm" // Import MenuForm here

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Burger", price: 12.99, description: "Juicy beef burger", ingredients: ["beef", "bun", "lettuce"], availability: "Available" },
    { id: 2, name: "Pizza", price: 15.49, description: "Cheese pizza", ingredients: ["cheese", "tomato", "dough"], availability: "Out of stock" },
  ]);

  // Function to handle adding a new item
  const addMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  // Function to toggle availability
  const toggleAvailability = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, availability: item.availability === "Available" ? "Out of stock" : "Available" } : item
    ));
  };

  // Function to delete a menu item
  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 w-[100vw] ">
      <h2 className="text-2xl font-semibold mb-6">Menu Management</h2>
      <MenuForm onSave={addMenuItem} />

      <div className="space-y-6 flex  items-center gap-4 min-w-[300px] w-full h-full">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="mt-2">{item.description}</p>
            <p className="mt-2 text-sm text-gray-500">Ingredients: {item.ingredients.join(", ")}</p>
            <p className={`mt-2 text-sm ${item.availability === "Available" ? "text-green-600" : "text-red-600"}`}>
              {item.availability}
            </p>

            <div className="mt-4 space-x-4">
              <button 
                onClick={() => toggleAvailability(item.id)} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Toggle Availability
              </button>
              <button 
                onClick={() => deleteMenuItem(item.id)} 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
