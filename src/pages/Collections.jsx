import { useState } from "react";
import { Eye, Pencil, Trash2, Plus, Search } from "lucide-react";

const Collections = () => {
  const [search, setSearch] = useState("");

  const collectionsData = [
    {
      id: 1,
      name: "Summer 2026",
      category: "Men",
      products: 42,
      status: "Active",
      createdAt: "2026-01-12",
      image: "https://picsum.photos/seed/1/40/40",
    },
    {
      id: 2,
      name: "Winter Premium",
      category: "Women",
      products: 28,
      status: "Draft",
      createdAt: "2026-01-05",
      image: "https://picsum.photos/seed/2/40/40",
    },
    {
      id: 3,
      name: "Electronics Deals",
      category: "Electronics",
      products: 65,
      status: "Archived",
      createdAt: "2025-12-20",
      image: "https://picsum.photos/seed/3/40/40",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Collections</h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage your product collections and campaigns
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl shadow-sm border-none flex items-center justify-between">
        <div className=" rounded-2xl bg-gray-700 border-none outline-none relative w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search collections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-3">
          <select className="border-none px-3 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2  focus:ring-indigo-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>

          <select className="border-none px-3 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Electronics</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-800 border-none  p-8 rounded-xl shadow-sm border text-center text-gray-400">
        <div className="grid grid-cols-1 mb-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700  p-5 rounded-xl shadow-sm  hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">Total Collections</p>
                <h2 className="text-2xl text-white font-semibold text-gray-800 mt-1">
                  24
                </h2>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">📦</div>
            </div>
          </div>

          <div className="bg-gray-700  p-5 rounded-xl shadow-sm  hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">Active</p>
                <h2 className="text-2xl font-semibold text-white  mt-1">18</h2>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">✅</div>
            </div>
          </div>

          <div className="bg-gray-700 p-5 rounded-xl shadow-sm  hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white ">Draft</p>
                <h2 className="text-2xl font-semibold text-white mt-1">4</h2>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">📝</div>
            </div>
          </div>

          <div className="bg-gray-700 p-5 rounded-xl shadow-sm  hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">Archived</p>
                <h2 className="text-2xl font-semibold text-white  mt-1">2</h2>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">🗂️</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-xl shadow-sm  overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-300   border-b text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Collection</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Products</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Created</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-white">
                {collectionsData.map((collection) => (
                  <tr key={collection.id} className="cursor-pointer transition">
                    <td className="px-6 py-4  flex items-center gap-3">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-15 h-10 mr-3  rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-300">
                        {collection.name}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-200">
                      {collection.category}
                    </td>

                    <td className="px-6 py-4 text-gray-200">
                      {collection.products}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          collection.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : collection.status === "Draft"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {collection.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {collection.createdAt}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-3">
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
    </div>
  );
};

export default Collections;
