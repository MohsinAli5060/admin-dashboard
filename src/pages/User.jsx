import { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

// Initial dummy users
const initialUsers = [
  {
    id: 1,
    name: "Mohsin Ali",
    email: "mohsin@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Ali Raza",
    email: "ali@example.com",
    role: "Viewer",
    status: "Inactive",
  },
];

const User = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Viewer",
    status: "Active",
  });

  // Search filter
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Handle add/edit submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      // Edit existing
      setUsers(
        users.map((u) =>
          u.id === editingUser.id ? { ...editingUser, ...formData } : u,
        ),
      );
      setEditingUser(null);
    } else {
      // Add new
      const newUser = { id: Date.now(), ...formData };
      setUsers([...users, newUser]);
    }
    setFormData({ name: "", email: "", role: "Viewer", status: "Active" });
  };

  // Start editing
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header + Add User */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">User Management</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md transition"
            onClick={() => setEditingUser(null)}
          >
            <FiPlus /> Add User
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-2">
          {editingUser ? "Edit User" : "Add New User"}
        </h2>
        <form
          className="flex flex-col md:flex-row md:items-end gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none flex-1"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none flex-1"
          />
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none"
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
          >
            {editingUser ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="px-4 py-3 text-white">ID</th>
              <th className="px-4 py-3 text-white">Name</th>
              <th className="px-4 py-3 text-white">Email</th>
              <th className="px-4 py-3 text-white">Role</th>
              <th className="px-4 py-3 text-white">Status</th>
              <th className="px-4 py-3 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="px-4 py-2 text-gray-200">{user.id}</td>
                <td className="px-4 py-2 text-gray-200">{user.name}</td>
                <td className="px-4 py-2 text-gray-200">{user.email}</td>
                <td className="px-4 py-2 text-gray-200 capitalize">
                  {user.role}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-400"
                    onClick={() => handleEdit(user)}
                  >
                    <FiEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-400"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-2 text-gray-400 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
