import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20"); // you can increase
        const data = await res.json();

        const formatted = data.map((item) => ({
          id: item.id,
          name: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
        }));

        setProducts(formatted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-white">Loading products...</p>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">Products</h2>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-700 text-white text-sm px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Link to="/products/cart" className="relative">
          <ShoppingCartIcon className="w-8 h-8 text-white" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto flex-1 pr-2">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/product/${product.id}`}
            className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex flex-col"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 bg-gray-700"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-white font-semibold mb-1 line-clamp-2">
                  {product.name}
                </p>
                <p className="text-gray-400 text-sm mb-2 capitalize">
                  {product.category}
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-indigo-400 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-3 py-1 rounded-md transition"
                  onClick={(e) => {
                    e.preventDefault(); // stops Link navigation
                    e.stopPropagation(); // stops bubbling
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
