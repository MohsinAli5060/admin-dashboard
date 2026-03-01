import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User"; // fixed import
import Layout from "./Layout";
import HideNavbarWrapper from "./Functions/HideNavbarWrapper";
import Analytics from "./pages/Analytics";
import Categories from "./pages/Categories";
import Collections from "./pages/Collections";
import Discounts from "./pages/Discouts";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Carts from "./pages/Carts";
import ProductDetails from "./pages/ProductDetails";
import { useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout isOpen={isOpen} setIsOpen={setIsOpen} />}
        >
          <Route index element={<Dashboard cart={cart} />} />

          <Route
            path="dashboard"
            element={
              <HideNavbarWrapper>
                <Dashboard cart={cart} />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="users"
            element={
              <HideNavbarWrapper>
                <User />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="orders"
            element={
              <HideNavbarWrapper>
                <Orders/>
              </HideNavbarWrapper>
            }
          />
          <Route
            path="discounts"
            element={
              <HideNavbarWrapper>
                <Discounts/>
              </HideNavbarWrapper>
            }
          />
          <Route
            path="employees"
            element={
              <HideNavbarWrapper>
                <Employees/>
              </HideNavbarWrapper>
            }
          />
          <Route
            path="settings"
            element={
              <HideNavbarWrapper>
                <Settings/>
              </HideNavbarWrapper>
            }
          />
          <Route
            path="collections"
            element={
              <HideNavbarWrapper>
                <Collections />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="categories"
            element={
              <HideNavbarWrapper>
                <Categories />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="products"
            element={
              <HideNavbarWrapper>
                <Products cart={cart} setCart={setCart} />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="products/cart"
            element={
              <HideNavbarWrapper>
                <Carts cart={cart} setCart={setCart} />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="analytics"
            element={
              <HideNavbarWrapper>
                <Analytics/>
              </HideNavbarWrapper>
            }
          />
          <Route
            path="dashboard/products/cart"
            element={
              <HideNavbarWrapper>
                <Carts cart={cart} setCart={setCart} />
              </HideNavbarWrapper>
            }
          />
          <Route
            path="/products/product/:id"
            element={
              <HideNavbarWrapper>
                <ProductDetails cart={cart} setCart={setCart} />
              </HideNavbarWrapper>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
