// import AdminSidebar from "../components/AdminSidebar"

import { FaPlus } from "react-icons/fa"
import ProductTable from "../../components/admin-components/ProductTable"
import { Link } from "react-router-dom"


const Products = () => {
  return (
    <div className=" w-full p-5">
      <div className=" flex justify-between flex-row items-center ">

      <h2 className=" font-bold text-2xl my-5">Products</h2>
      <Link to='new'>
      <FaPlus size={40} className=" p-2  text-white bg-violet-700 hover:bg-violet-400 cursor-pointer rounded-full text-2xl"/>
      </Link>
      </div>
      <ProductTable />

    </div>
  )
}

export default Products