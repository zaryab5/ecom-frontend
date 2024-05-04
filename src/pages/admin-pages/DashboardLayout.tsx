
import AdminSidebar from "../../components/admin-components/AdminSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout =() => {
  
  return (
    <div className="flex overflow-hidden   ">
      <AdminSidebar />
      <div
        style={{ overflowY: "auto" }}
        className=" ml-20 sm:ml-0 flex justify-center bg-greenish  w-full h-[100vh] overflow-hidden "
      >
        
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
