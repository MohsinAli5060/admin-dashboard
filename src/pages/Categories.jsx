import { useState } from "react";
import { Eye, Pencil, Trash2, Search } from "lucide-react";

const Categories = () => {
  const [search, setSearch] = useState("");

  const categoriesData = [
    {
      id: 1,
      name: "Men",
      slug: "men",
      products: 120,
      status: "Active",
      createdAt: "2026-01-12",
      image: "https://picsum.photos/seed/11/40/40",
    },
    {
      id: 2,
      name: "Women",
      slug: "women",
      products: 95,
      status: "Inactive",
      createdAt: "2026-01-10",
      image: "https://picsum.photos/seed/12/40/40",
    },
    {
      id: 3,
      name: "Electronics",
      slug: "electronics",
      products: 60,
      status: "Active",
      createdAt: "2026-02-01",
      image: "https://picsum.photos/seed/13/40/40",
    },
  ];

  const filteredCategories = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          Categories
        </h1>

        <div className="relative w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-700 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-gray-700 p-5 rounded-xl">
            <p className="text-sm text-white">Total Categories</p>
            <h2 className="text-2xl font-semibold text-white mt-1">
              {categoriesData.length}
            </h2>
          </div>

          <div className="bg-gray-700 p-5 rounded-xl">
            <p className="text-sm text-white">Active</p>
            <h2 className="text-2xl font-semibold text-white mt-1">
              {categoriesData.filter((c) => c.status === "Active").length}
            </h2>
          </div>

          <div className="bg-gray-700 p-5 rounded-xl">
            <p className="text-sm text-white">Inactive</p>
            <h2 className="text-2xl font-semibold text-white mt-1">
              {categoriesData.filter((c) => c.status === "Inactive").length}
            </h2>
          </div>

        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">

            <thead className="bg-gray-300 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Slug</th>
                <th className="px-6 py-3">Products</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700 text-white">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-700 transition">
                  
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="font-medium text-gray-300">
                      {category.name}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {category.slug}
                  </td>

                  <td className="px-6 py-4 text-gray-200">
                    {category.products}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        category.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {category.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {category.createdAt}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-3">
                      
                      <button className="p-2 rounded-lg hover:bg-indigo-50 transition group">
                        <Eye
                          size={16}
                          className="text-indigo-600 group-hover:scale-110 transition"
                        />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-blue-50 transition group">
                        <Pencil
                          size={16}
                          className="text-blue-600 group-hover:scale-110 transition"
                        />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-red-50 transition group">
                        <Trash2
                          size={16}
                          className="text-red-600 group-hover:scale-110 transition"
                        />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

export default Categories;
