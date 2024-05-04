import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const HomeLayout = () => {
  return (
    <div className=" bg-primary">
      <ScrollToTop/>
    <TopNav />
    <Header />
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default HomeLayout