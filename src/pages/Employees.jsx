import React, { useState } from "react";
import { Eye, Pencil, Trash2, Plus, Search } from "lucide-react";

const Employee = () => {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@example.com",
      role: "Frontend Developer",
      department: "IT",
      status: "Active",
      joined: "2025-01-12",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara@example.com",
      role: "HR Manager",
      department: "HR",
      status: "Inactive",
      joined: "2024-02-18",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@example.com",
      role: "Backend Developer",
      department: "IT",
      status: "On Leave",
      joined: "2023-11-05",
    },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400";
      case "Inactive":
        return "bg-red-500/20 text-red-400";
      case "On Leave":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Employees</h1>

        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg mb-6 w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search employee..."
          className="ml-2 w-full bg-transparent outline-none text-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table Card */}
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4 text-gray-300">Employee</th>
              <th className="p-4 text-gray-300">Role</th>
              <th className="p-4 text-gray-300">Department</th>
              <th className="p-4 text-gray-300">Status</th>
              <th className="p-4 text-gray-300">Joined</th>
              <th className="p-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-gray-700 hover:bg-gray-700/40 transition"
              >
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?img=${emp.id}`}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">{emp.name}</p>
                    <p className="text-gray-400 text-sm">{emp.email}</p>
                  </div>
                </td>

                <td className="p-4 text-gray-300">{emp.role}</td>
                <td className="p-4 text-gray-400">{emp.department}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(
                      emp.status,
                    )}`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="p-4 text-gray-400">{emp.joined}</td>

                <td className="p-4 flex gap-4">
                  <Eye
                    size={18}
                    className="text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  />
                  <Pencil
                    size={18}
                    className="text-yellow-400 hover:text-yellow-300 cursor-pointer"
                  />
                  <Trash2
                    size={18}
                    className="text-red-400 hover:text-red-300 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredEmployees.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No employees found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
