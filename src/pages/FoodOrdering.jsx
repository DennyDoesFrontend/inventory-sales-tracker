import { useState } from "react";
import { ShoppingCart, CheckCircle, Trash2 } from "lucide-react";

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 12.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Classic Burger", price: 9.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Pasta Alfredo", price: 14.99, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Caesar Salad", price: 7.99, image: "https://via.placeholder.com/150" },
];

const FoodOrdering = () => {
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowReceipt(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">🍽️ Restaurant Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <ShoppingCart className="mr-2" size={18} /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && !showReceipt && (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingCart /> Order Summary
          </h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b items-center">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <div className="flex items-center gap-4">
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          <div className="text-lg font-semibold mt-4">Total: ${getTotal()}</div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
          >
            <CheckCircle className="mr-2" size={18} /> Proceed to Payment
          </button>
        </div>
      )}

      {/* Receipt Section */}
      {showReceipt && (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold">🧾 Receipt</h2>
          <p className="text-gray-700">Table Number: {Math.floor(Math.random() * 50) + 1}</p>
          <div className="mt-4">
            {cart.map((item) => (
              <div key={item.id} className="py-2 border-b">
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold mt-4">Total Paid: ${getTotal()}</div>
          <p className="text-green-600 mt-2">✅ Order Confirmed! Enjoy your meal.</p>
        </div>
      )}
    </div>
  );
};

export default FoodOrdering;
