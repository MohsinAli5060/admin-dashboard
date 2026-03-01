import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const Discounts = () => {
  const [discounts, setDiscounts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=20");
        const data = await res.json();

        const transformed = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.thumbnail,
          code: product.title.slice(0, 6).toUpperCase(),
          value: Math.floor(product.discountPercentage),
          usage: Math.floor(Math.random() * 200),
          limit: 200,
          status:
            product.stock > 50
              ? "Active"
              : product.stock > 20
                ? "Scheduled"
                : "Expired",
        }));

        setDiscounts(transformed);
        setLoading(false);
      } catch (err) {
        setError("Failed to load discounts");
        setLoading(false);
      }
    };

    fetchDiscounts();
  }, []);

  const filtered = discounts.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <div className="p-6 text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Discounts</h1>
        <div className="bg-gray-900  border-gray-700 p-4 rounded-xl">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-70 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((discount) => {
          const percentage = (discount.usage / discount.limit) * 100;

          return (
            <div
              key={discount.id}
              className="bg-gray-900 border hover:scale-3d border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48 bg-gray-800">
                <img
                  src={discount.image}
                  alt={discount.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {discount.value}% OFF
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">
                  {discount.name}
                </h3>

                <p className="text-indigo-400 text-sm font-mono mb-4">
                  {discount.code}
                </p>

                <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    {discount.usage} / {discount.limit}
                  </span>

                  <span
                    className={`px-2 py-1 rounded-full font-medium ${
                      discount.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : discount.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {discount.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discounts;
