import { useState, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [items, setItems] = useState([
    { name: "Item A", stock: 10 },
    { name: "Item B", stock: 5 },
    { name: "Item C", stock: 20 },
  ]);
  const [stockAlert, setStockAlert] = useState(false);

  useEffect(() => {
    const lowStockItem = items.some((item) => item.stock < 5);
    setStockAlert(lowStockItem);
  }, [items]);

  const handleUpdateStock = (index, newStock) => {
    const updatedItems = [...items];
    updatedItems[index].stock = newStock;
    setItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-blue-700 text-white shadow-md">
        <h1 className="text-3xl font-semibold">Inventory Management</h1>
      </div>

      {/* Stock Alert */}
      {stockAlert && (
        <div className="flex items-center bg-red-500 text-white p-4 rounded-md shadow-md mx-6 my-4">
          <FiAlertTriangle className="text-2xl mr-2" />
          <strong>Alert:</strong> Some items have low stock!
        </div>
      )}

      {/* Inventory Table */}
      <div className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Current Inventory</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-3 text-left">Item Name</th>
                  <th className="p-3 text-center">Stock</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">{item.stock}</td>
                    <td className="p-4 text-center">
                      <input
                        type="number"
                        value={item.stock}
                        onChange={(e) => handleUpdateStock(index, parseInt(e.target.value))}
                        className="p-2 border rounded w-20 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Manage Orders", to: "/orders", color: "bg-blue-600" },
          { name: "View Sales", to: "/sales", color: "bg-green-600" },
          { name: "Settings", to: "/settings", color: "bg-gray-800" },
          { name: "Dashboard", to: "/dashboard", color: "bg-teal-500" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`${link.color} text-white p-6 rounded-xl shadow-lg hover:opacity-90 transition-transform transform hover:scale-105 text-center`}
          >
            {link.name}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Inventory;


