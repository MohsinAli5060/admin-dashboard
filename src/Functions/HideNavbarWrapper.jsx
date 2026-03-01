// HideNavbarWrapper.jsx
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const HideNavbarWrapper = ({ children }) => {
  const { setShowNavbar } = useOutletContext();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  return children;
};

export default HideNavbarWrapper;
