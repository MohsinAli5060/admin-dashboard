import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TotalSalesChart = ({ cart }) => {
  // Convert cart data to monthly sales
  // For simplicity, assume all products sold today are in cart
  const salesData = cart.map((product, index) => ({
    name: `Sale ${index + 1}`,
    amount: product.price,
  }));

  // If cart is empty, show a default dummy chart
  const data = salesData.length
    ? salesData
    : [
        { name: "Sale 1", amount: 0 },
        { name: "Sale 2", amount: 0 },
        { name: "Sale 3", amount: 0 },
      ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
        <XAxis dataKey="name" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1F2937", borderRadius: "8px" }}
          itemStyle={{ color: "#F3F4F6" }}
        />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#6366F1"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalSalesChart;
