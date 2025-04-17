import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    // <div className="w-screen h-screen overflow-hidden lg:px-[60px] lg:py-[30px] relative text-black">
    //   <Topbar />
    //   <Sidebar />
    //   <main className="flex items-center justify-center w-full h-full">
    //     <Outlet />
    //   </main>
    // </div>
    <div className="w-screen h-screen overflow-hidden lg:px-[60px] lg:py-[30px] relative text-black">
      {/* Fixed Topbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white lg:px-[60px]">
        <Topbar />
      </div>

      <Sidebar />

      {/* Main scrollable area below Topbar */}
      <main className="pt-[20px] w-full h-full overflow-y-auto px-4 py-6 lg:overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
