import React from "react";

const ordersData = [
  {
    id: "#ORD-1001",
    customer: "Ali Khan",
    date: "2025-02-20",
    amount: "$240",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Sara Ahmed",
    date: "2025-02-21",
    amount: "$120",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "John Smith",
    date: "2025-02-22",
    amount: "$420",
    status: "Cancelled",
  },
];

const Orders = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "Cancelled":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Orders</h1>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg">
          + New Order
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4 text-gray-300">Order ID</th>
              <th className="p-4 text-gray-300">Customer</th>
              <th className="p-4 text-gray-300">Date</th>
              <th className="p-4 text-gray-300">Amount</th>
              <th className="p-4 text-gray-300">Status</th>
              <th className="p-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700/40 transition"
              >
                <td className="p-4 text-white">{order.id}</td>
                <td className="p-4 text-gray-300">{order.customer}</td>
                <td className="p-4 text-gray-400">{order.date}</td>
                <td className="p-4 text-white font-semibold">{order.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 space-x-3">
                  <button className="text-indigo-400 hover:text-indigo-300">
                    View
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
