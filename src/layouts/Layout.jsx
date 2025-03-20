import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";


const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
