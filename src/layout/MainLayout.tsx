import { Outlet } from "react-router";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
