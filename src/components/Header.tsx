import { Link } from "react-router-dom";

import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [menuOpen,setMenuOpen]=useState<boolean>(false);
  return (
    <nav className="   lg:px-[60px] bg-primary border-b-2  flex flex-row p-5 gap-5 items-center justify-between">
    <div>

     <RiMenu2Fill onClick={()=>setMenuOpen(!menuOpen)} className=" cursor-pointer lg:hidden"/>
    </div>
      <Link to={"/"} className=" flex-1 text-lg md:text-2xl font-extrabold">
        Exculsives
      </Link>
      <div className={`${menuOpen?"flex py-10":"hidden"}  lg:flex-row  lg:flex lg:static flex-col text-center absolute w-full top-28 right-0 z-50 bg-white gap-5 flex-1`}>
        <Link to={"/"} className=" lg:border-b-2 lg:border-black ">
          Home
        </Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </div>

      <div className=" relative hidden lg:block ">
        <input
          className=" bg-placeholder rounded-sm p-2 px-4 outline-none lg:w-72"
          type="text"
          placeholder="What are you looking for?"
        />
        <CiSearch
          size={28}
          className=" cursor-pointer top-0 m-[6px] right-0 w-fit absolute "
        />
      </div>

      <Link to={"/wishlist"}>
        <div className=" relative">
          <p className=" absolute flex justify-center  items-center ms-4  text-xs p-2 w-3 h-3 bg-secondary-3 rounded-full  text-white">
            5
          </p>
          <CiHeart className=" cursor-pointer" size={30} />
        </div>
      </Link>
      <Link to={"/cart"}>
        <div className=" relative">
          <p className=" absolute flex justify-center items-center ms-4  text-xs p-2 w-3 h-3 bg-secondary-3 rounded-full  text-white">
            5
          </p>
          <CiShoppingCart className=" cursor-pointer" size={30} />
        </div>
      </Link>
      <Link to={"/account"}>
        <CiUser className=" cursor-pointer" size={26} />
      </Link>
    </nav>
  );
};

export default Header;
