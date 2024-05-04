import {  FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
const HeroCategory = () => {
  return (
    <ul className=" hidden lg:flex p-8 font-semibold  flex-col gap-1 border-r-2 min-w-[250px]">
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Woman's Fashion</Link><FaAngleRight/></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Men's Fashion</Link><FaAngleRight/></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Electronics</Link></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Home & Lifestyle</Link></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Sport & Outdoor</Link></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Baby's & Toys</Link></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Groceries & Pets</Link></li>
        <li className=" rounded-md flex items-center justify-between hover:bg-placeholder p-2"><Link to={"/"}>Health & Beauty</Link></li>
    </ul>
  )
}

export default HeroCategory