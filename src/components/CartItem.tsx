import { FaTrash } from "react-icons/fa"
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

// import a from "../assets/p1.webp";
// import b from "../assets/p2.webp";
// import c from "../assets/p3.webp";

type itemProps={
    img: string,
    name: string,
    price : number,
    quantity : number
}

const CartItem = ({img,name,price,quantity}:itemProps) => {
  const [Quantity,setQuantity]=useState<number>(quantity);

  return (
    <tr >
        <td>
        <div  className=" w-20">
      <img src={img} className=" w-fit p-2" alt="product" />

        </div>
        </td>
    <td className="  flex-row gap-3 pr-4 py-4  ">
        
      <div className=" text-left flex items-start flex-col min-w-52 ">
        <h2 className=" font-bold">{name}</h2>
        <p>Size: normal</p>
      </div>
    </td>
    <td >
      <p>${price}</p>
    </td>
    <td >
      <div className=" flex flex-row items-center justify-center gap-4 border-2 rounded-lg py-2 border-gray-500">
        {/* <FaPlus/> */}
        <GoPlus onClick={()=>setQuantity(Quantity+1)} className=" cursor-pointer"/>
       <p className=" select-none">
        {Quantity}
        </p> 
        <FiMinus onClick={()=>(Quantity!=0? setQuantity( Quantity-1):'')} className=" cursor-pointer"/>
      
      </div>
    </td>
    <td>${Quantity*price}</td>
    <td >
      <FaTrash className=" cursor-pointer hover:text-red-500" />
    </td>
  </tr>
  )
}

export default CartItem