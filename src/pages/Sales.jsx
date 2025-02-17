// src/pages/Sales.jsx
import { useState } from "react";

const Sales = () => {
  const [salesData, setSalesData] = useState([
    { item: "Item A", amount: 200 },
    { item: "Item B", amount: 150 },
    { item: "Item C", amount: 500 },
  ]);

  const totalSales = salesData.reduce((acc, sale) => acc + sale.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between p-6 bg-blue-600 text-white">
        <h1 className="text-2xl">Sales Tracker</h1>
      </div>

      <div className="p-6">
        {/* Total Sales */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-lg font-bold">Today's Total Sales</h3>
          <p className="text-xl">${totalSales}</p>
        </div>

        {/* Sales Data */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Sales Data</h3>
          <ul>
            {salesData.map((sale, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{sale.item}</span>
                <span>${sale.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sales;
