import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoGrid, IoPeopleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";


import "../../styles/AdminSidebar.css"
import {
  FaChartPie,
  FaBagShopping,
  FaMoneyCheckDollar,
  FaGear,
} from "react-icons/fa6";
import {   useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const AdminSidebar = () => {

  const location =useLocation();
  const value: string=location.pathname.split('/').pop()!;




  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
const [activeMenuItem,setActiveMenuItem]=useState<string>("Dashboard");
const [indicatorPosition, setIndicatorPosition] = useState<number>(0);
useEffect(()=>{

  switch(value){
    case 'dashboard':
      handleItemClick(value,1);
      break;
    case 'new':
      handleItemClick(value,58);
      break;
    case 'product':
        handleItemClick(value,116);
        break;
        case 'edit':
        handleItemClick('product',116);
        break;
    case 'customer':
        handleItemClick(value,174);
        break;
        case 'transaction':
          handleItemClick(value,232);
          break;
          case 'manage':
          handleItemClick("transaction",232);
          break;
        case 'analytics':
          handleItemClick(value,290);
          break;
          case 'setting':
          handleItemClick(value,347);
          break;
    
  }
   
},[])

useEffect(()=>{

  if(window.innerWidth <= 700){
    setSidebarActive(false);
  }

},[window.innerWidth])
  
  const toggleSideBar = () => {
    setSidebarActive((prev) => !prev);
  };

  const handleItemClick = (item:string,index: number) => {
         setActiveMenuItem(item);
         setIndicatorPosition(index);
  }


  

  return (
    <div className="sidbar-wrapper fixed z-50 sm:static h-full sm:h-auto ">
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="toggle-btn" onClick={toggleSideBar}>
          {/* <FaArrowAltCircleLeft/> */}

          {sidebarActive ? <FaArrowLeft /> : <FaArrowRight />}

         </div>
        <ul className="list overflow-hidden" >
          <li className="item logo">
            <Link to="" className="addProduct">
              <div className="icon">
                {/* <IoGrid size={"2.4rem"} /> */}
                <MdAdminPanelSettings size={"25px"} />
                {/* <ion-icon name="grid"></ion-icon> */}
              </div>
              <p className="text">Admin Panel</p>
            </Link>
          </li>

          <div className="menu-list">
          <li className={`item ${activeMenuItem === 'dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('dashboard',1)}>
              <Link to="" >
                <div className="icon">
                <IoGrid size={"25px"}  />
                  {/* <ion-icon name="cog"></ion-icon>                 */}
                </div>
                <p className="text">Dashboard</p>
              </Link>
            </li>
            <li  className={`item ${activeMenuItem === 'new' ? 'active' : ''}`} onClick={() => handleItemClick('new',58)}>
              <Link to="/admin/dashboard/product/new">
                <div className="icon">
                  <IoMdAddCircle size={"25px"}  />
                  {/* <ion-icon name="cart"></ion-icon>                  */}
                </div>
                <p className="text">Add Product</p>
              </Link>
            </li>
            <li className={`item ${activeMenuItem === 'product' ? 'active' : ''}`} onClick={() => handleItemClick('product',116)}>
              <Link to="/admin/dashboard/product">
                <div className="icon">
                  <FaBagShopping size={"25px"}  />
                  {/* <FaChartPie/> */}
                  {/* <ion-icon name="home"></ion-icon>                  */}
                </div>
                <p className="text">Product</p>
              </Link>
            </li>
            <li className={`item ${activeMenuItem === 'customer' ? 'active' : ''}`} onClick={() => handleItemClick('customer',174)}>
              <Link to="customer" >
                <div className="icon">
                  <IoPeopleSharp size={"25px"}  />
                  {/* <ion-icon name="person"></ion-icon>                  */}
                </div>
                <p className="text">Customer</p>
              </Link>
            </li>
            <li className={`item ${activeMenuItem === 'transaction' ? 'active' : ''}`} onClick={() => handleItemClick('transaction',232)}>
              <Link to="transaction" >
                <div className="icon">
                  <FaMoneyCheckDollar size={"25px"}  />
                  {/* <ion-icon name="chatbubble"></ion-icon>                 */}
                </div>
                <p className="text">Transaction</p>
              </Link>
            </li>
            <li className={`item ${activeMenuItem === 'analytics' ? 'active' : ''}`} onClick={() => handleItemClick('analytics',290)}>
              <Link to="analytics?type=bar">
                <div className="icon">
                  <FaChartPie size={"25px"}  />
                  {/* <ion-icon name="pie-chart"></ion-icon>                  */}
                </div>
                <p className="text">Analytics</p>
              </Link>
            </li>

            <li className={`item ${activeMenuItem === 'setting' ? 'active' : ''}`} onClick={() => handleItemClick('setting',347)}>
              <Link to="" >
                <div className="icon">
                  <FaGear size={"25px"}  />
                  {/* <ion-icon name="cog"></ion-icon>                 */}
                </div>
                <p className="text">Settings</p>
              </Link>
            </li>
 
            <div className="indicator" style={{ transform: `translateY(${indicatorPosition}px)` }}></div>
          </div>
        </ul>
      </aside>
    </div>
  );
};


export default AdminSidebar;
