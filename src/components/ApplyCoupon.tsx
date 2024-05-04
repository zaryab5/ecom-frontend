import { Link } from "react-router-dom"
import OrderSuccess from "./OrderSuccess"
import { useState } from "react"
type couponProps={
    showbtn?:boolean
    link?:string
    btnValue?:string
}
const ApplyCoupon = ({showbtn=false,link='/shipping',btnValue='Proceed to Checkout'}:couponProps) => {
  const [order,setOrder]=useState(false);
  return (
    <>
    <aside className="  flex flex-col gap-5 p-5 max-w-80 border-2 rounded-md  m-10 h-fit mx-auto">
        <div  className=" flex flex-row justify-between border-b-2 pb-2">
          <p className=" font-bold ">Subtotal</p>
          <p className=" font-bold">$200.00</p>
        </div>
        <div>
          <p className=" text-sm text-text-2 pb-1">Enter Discount Code</p>
          <div  className=" flex flex-row ">            
          <input  type="text" className=" overflow-hidden p-2 outline-none border-2  rounded-l-md border-r-0" placeholder="FLAT50" />
          <button className=" text-white  bg-secondary-3 rounded-r-md outline-none  p-2">Apply</button>
          </div>
          
        </div>
        <div  className=" flex flex-row justify-between">
        <p>Delivery Charges</p>
          <p>$5.00</p>
        </div>
        <div  className=" flex flex-row justify-between">
        <p>Tax</p>
          <p>$5.00</p>
        </div>
        <div  className=" flex flex-row justify-between">
        <p>Discount</p>
          <p>-$5.00</p>
        </div>
        <div className=" flex flex-row justify-between border-t-2 py-2">
        <p className=" font-bold">Grand Total</p>
          <p className=" font-bold">$205.00</p>
        </div>
        {showbtn && link!='success'?
       
        <Link  to={link} className=" text-center p-4 rounded-md  bg-secondary-3 text-white">{btnValue}</Link>
       
        :''
    }
    {showbtn && link==='success'?
       
       <button onClick={()=>setOrder(true)}  className=" text-center p-4 rounded-md  bg-secondary-3 text-white">{btnValue}</button>
      
       :''
   }
   
      </aside>
      {order?<OrderSuccess/>:''}
      </>

  )
}

export default ApplyCoupon