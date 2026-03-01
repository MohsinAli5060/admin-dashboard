import { useState, useEffect } from "react";
import RevenueChart from "../components/RevenueChart";
import { Link } from "react-router-dom";
import TotalSalesChart from "../components/TotalSalesChart";

const Dashboard = ({ cart }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-lg">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md h-64 grid grid-cols-2 gap-4 p-4">
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white font-semibold">
            <p className="text-xl">Customers</p>
            <p className="text-2xl mt-2">1,245</p>
          </div>
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white font-semibold">
            <p className="text-xl">Orders</p>
            <p className="text-2xl mt-2">534</p>
          </div>
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white font-semibold">
            <p className="text-xl">Earnings</p>
            <p className="text-2xl mt-2">$12,345</p>
          </div>
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white font-semibold">
            <p className="text-xl">Growth</p>
            <p className="text-2xl mt-2">+8.4%</p>
          </div>
        </div>


        <div className="h-64 bg-gray-800 rounded-xl shadow-lg p-6">
          <RevenueChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Top Products Sales
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">No products Sale cart yet.</p>
          ) : (
            <div className="space-y-4 ">
              {cart.map((product) => (
                <Link
                  to="/dashboard/products/cart"
                  key={product.id}
                  className=" cursor-pointer flex items-center justify-between bg-gray-700 p-1 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-6 h-6 object-contain bg-gray-600  rounded"
                    />

                    <div>
                      <p className="text-white  text-sm">{product.name}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-indigo-400 font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-center h-72 col-span-1 bg-gray-800 rounded-lg shadow-md p-4">
          <TotalSalesChart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
