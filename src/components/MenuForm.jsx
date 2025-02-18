import { useState } from "react";

const MenuForm = ({ onSave }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [availability, setAvailability] = useState("Available");
  
    const handleSave = () => {
      const newItem = {
        id: Date.now(), // Generate unique ID
        name,
        price: parseFloat(price),
        description,
        ingredients: ingredients.split(",").map(item => item.trim()),
        availability,
      };
  
      onSave(newItem); // Save the new item
      setName(""); // Reset fields
      setPrice("");
      setDescription("");
      setIngredients("");
      setAvailability("Available");
    };
  
    return (
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Menu Item</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Dish Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Available">Available</option>
            <option value="Out of stock">Out of stock</option>
          </select>
          <button
            onClick={handleSave}
            className="w-full py-2 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Save Item
          </button>
        </div>
      </div>
    );
  };
  

  export default MenuForm;