import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CollectionsIcon from "@mui/icons-material/Collections";
import CategoryIcon from "@mui/icons-material/Category";
import DiscountIcon from "@mui/icons-material/Discount";
import BadgeIcon from "@mui/icons-material/Badge";
import StoreIcon from "@mui/icons-material/Store";

const menuItems = [
  { icon: DashboardIcon, name: "Dashboard", path: "/dashboard", id: 1 },
  { icon: PeopleIcon, name: "Users", path: "/users", id: 2 },
  { icon: AnalyticsIcon, name: "Analytics", path: "/analytics", id: 3 },
  { icon: ShoppingCartIcon, name: "Orders", path: "/orders", id: 4 },
  { icon: CollectionsIcon, name: "Collections", path: "/collections", id: 5 },
  { icon: CategoryIcon, name: "Categories", path: "/categories", id: 6 },
  { icon: DiscountIcon, name: "Discounts", path: "/discounts", id: 7 },
  { icon: BadgeIcon, name: "Employees", path: "/employees", id: 8 },
  { icon: StoreIcon, name: "Products", path: "/products", id: 9 },
  { icon: SettingsIcon, name: "Settings", path: "/settings", id: 10 },
];

const Sidebar = ({ isOpen, setIsOpen, setShowNavbar }) => {
  return (
    <div
      className={`bg-gray-800 text-white p-5 transition-all duration-300 ${
        isOpen ? "w-64" : "w-30"
      } h-screen`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">{isOpen ? "MohsinTech" : "MT"}</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-700 px-3 py-2 rounded hover:bg-gray-600"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <NavLink
                onClick={() => setShowNavbar(false)}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`
                }
              >
                <Icon className="text-xl" />
                {isOpen && <span>{item.name}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
