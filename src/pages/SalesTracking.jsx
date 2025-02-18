import { useState, useEffect } from "react";

const SalesTracking = () => {
  const [salesData, setSalesData] = useState({
    dailySales: 0,
    weeklySales: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch sales data from the mock API
    fetch("http://localhost:5000/sales")
      .then((response) => response.json())
      .then((data) => {
        setSalesData(data); // Update sales data state
        setLoading(false);   // Stop the loading spinner
      })
      .catch((err) => {
        setError("Failed to load sales data.");
        setLoading(false);  // Stop the loading spinner even if there's an error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-semibold">Sales Tracking</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Sales Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Today's Sales */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700">Today's Sales</h3>
            <p className="text-3xl text-gray-700 mt-2">${salesData.dailySales}</p>
            <p className="text-sm text-gray-500">Total sales today</p>
          </div>

          {/* This Week's Sales */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700">This Week's Sales</h3>
            <p className="text-3xl text-gray-700 mt-2">${salesData.weeklySales}</p>
            <p className="text-sm text-gray-500">Total sales this week</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SalesTracking;
