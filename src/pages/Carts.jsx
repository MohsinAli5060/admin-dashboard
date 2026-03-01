import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // Total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-white text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          to="/"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-white text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain rounded-md mb-4 bg-gray-700 p-2"
            />
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-white font-semibold mb-1 line-clamp-2">{item.name}</p>
              <p className="text-gray-400 text-sm capitalize">{item.category}</p>
              <p className="text-indigo-400 font-bold text-lg mt-2">${item.price.toFixed(2)}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end items-center gap-6">
        <p className="text-white text-xl font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
