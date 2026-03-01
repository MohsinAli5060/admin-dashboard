import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        setProduct({
          id: data.id,
          name: data.title,
          category: data.category,
          price: data.price,
          image: data.image,
          description: data.description,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  if (!product) {
    return <p className="text-white">Loading product...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-contain bg-gray-700 p-4 rounded"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-400 mb-2 capitalize">{product.category}</p>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-indigo-400 text-2xl font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
