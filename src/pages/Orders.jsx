import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    { orderId: 1, itemName: "Item A", quantity: 2, status: "Pending" },
    { orderId: 2, itemName: "Item B", quantity: 1, status: "Shipped" },
    { orderId: 3, itemName: "Item C", quantity: 5, status: "Pending" },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");  // Added searchQuery state

  const handleUpdateStatus = (index, status) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = status;
    setOrders(updatedOrders);
  };

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the orders based on searchQuery
  const filteredOrders = orders.filter(
    (order) =>
      order.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toString().includes(searchQuery) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-blue-600 text-white">
        <h1 className="text-3xl font-semibold">Manage Orders</h1>
      </div>

      {/* Search Bar */}
      <div className="p-6">
        <input
          type="text"
          placeholder="Search by Order ID, Item, or Status"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      {/* Orders List */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-blue-700">{order.itemName}</h3>
              <p className="text-gray-700">Order ID: {order.orderId}</p>
              <p className="text-gray-700">Quantity: {order.quantity}</p>
              <p className="text-sm text-gray-500">Status: {order.status}</p>

              <div className="mt-4 space-x-3">
                <button
                  onClick={() => handleOpenModal(order)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
                >
                  View Details
                </button>
                {order.status !== "Shipped" && (
                  <button
                    onClick={() => handleUpdateStatus(index, "Shipped")}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                  >
                    Mark as Shipped
                  </button>
                )}
                {order.status !== "Delivered" && (
                  <button
                    onClick={() => handleUpdateStatus(index, "Delivered")}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                  >
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700">Order Details</h2>
            <div className="mt-4">
              <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
              <p><strong>Item Name:</strong> {selectedOrder.itemName}</p>
              <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
            </div>

            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                onClick={() => handleUpdateStatus(orders.findIndex(o => o.orderId === selectedOrder.orderId), "Delivered")}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Mark as Delivered
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
