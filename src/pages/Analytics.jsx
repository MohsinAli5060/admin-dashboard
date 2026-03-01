import { Legend } from "recharts";

import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4780 },
  { name: "May", revenue: 5890 },
  { name: "Jun", revenue: 6390 },
];

const salesData = [
  { name: "Mon", sales: 240 },
  { name: "Tue", sales: 139 },
  { name: "Wed", sales: 980 },
  { name: "Thu", sales: 390 },
  { name: "Fri", sales: 480 },
  { name: "Sat", sales: 380 },
];

const trafficData = [
  { name: "Google", value: 400 },
  { name: "Facebook", value: 300 },
  { name: "Instagram", value: 300 },
  { name: "Direct", value: 200 },
];

const COLORS = ["#6366F1", "#06B6D4", "#10B981", "#F59E0B"];

const Analytics = () => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-white">Analytics</h1>
        <p className="text-gray-400 text-lg">Business Insights Overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Revenue", value: "$24,780" },
          { title: "Sales", value: "1,245" },
          { title: "Users", value: "320" },
          { title: "Orders", value: "860" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          >
            <p className="text-gray-400 text-lg">{item.title}</p>
            <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Revenue Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Weekly Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="sales" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">
            Traffic Sources
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={trafficData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {trafficData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
