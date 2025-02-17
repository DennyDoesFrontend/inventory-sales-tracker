// src/pages/Inventory.jsx
import { useState, useEffect } from "react";

const Inventory = () => {
  const [items, setItems] = useState([
    { name: "Item A", stock: 10 },
    { name: "Item B", stock: 5 },
    { name: "Item C", stock: 20 },
  ]);
  const [stockAlert, setStockAlert] = useState(false);

  useEffect(() => {
    // Check stock levels and trigger an alert if any item has stock < 5
    const lowStockItem = items.some(item => item.stock < 5);
    setStockAlert(lowStockItem);
  }, [items]);

  const handleUpdateStock = (index, newStock) => {
    const updatedItems = [...items];
    updatedItems[index].stock = newStock;
    setItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between p-6 bg-blue-600 text-white">
        <h1 className="text-2xl">Manage Inventory</h1>
      </div>

      {/* Stock Alert */}
      {stockAlert && (
        <div className="bg-red-500 text-white p-4 mb-4 text-center">
          <strong>Alert:</strong> Low stock for some items!
        </div>
      )}

      <div className="p-6">
        {/* Inventory List */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Current Inventory</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={item.stock}
                    onChange={(e) =>
                      handleUpdateStock(index, parseInt(e.target.value))
                    }
                    className="p-2 border rounded w-20"
                  />
                  <span className="text-sm">in stock</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
