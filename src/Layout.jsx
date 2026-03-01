import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const Layout = ({ isOpen, setIsOpen }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="flex-1 flex flex-col">
        {showNavbar && <Navbar />}
        {/* {showNavbar && <Dashboard />} */}

        <div className="p-4 overflow-y-auto">
          <Outlet context={{ setShowNavbar }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
