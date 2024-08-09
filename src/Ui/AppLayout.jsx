import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


function AppLayout() {
  return (
    <div>
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
