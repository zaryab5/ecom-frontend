import { useState } from "react";
import { Link } from "react-router-dom";



interface OrderItemType  {
    name : string;
    photo : string;
    price : number;
    quantity : number;
    _id : string
}

interface OrderType  {
  _id : string;
  name : string;
  address : string;
  city : string;
  country : string;
  pinCode : number;
  status : "Processing" | "Shipped" | "Delivered";
  subtotal : number;
  discount : number;
  tax : number;
  shippingCharges : number;
  total : number;
  orderItems : OrderItemType[];
  
}
const img = 'https://m.media-amazon.com/images/I/61jBnY6paeL.__AC_SX300_SY300_QL70_FMwebp_.jpg';
const img2='https://m.media-amazon.com/images/I/71iMPr0C8KL._AC_SX679_.jpg';
const  sampleItem: OrderItemType[]=[
  {
    name:"Headset",
    photo:img,
    _id:"asd23ddsssaee2",
    quantity: 4,
    price:2000,
  },
  {
    name:"Bag",
    photo:img2,
    _id:"889",
    quantity: 5,
    price:3000,
  }
];
const sampleUser: OrderType={
  _id : "12a341j2",
  name : "Zaryab",
  address : "I8",
  city : "Islamabad",
  country : "Pakistan",
  pinCode : 2302,
  status : "Processing" ,
  subtotal : 23333,
  discount : 100,
  tax : 5,
  shippingCharges : 5,
  total : 30000,
  orderItems : sampleItem
}
const ManageTransaction = () => {

  const [order, setOrder]=useState<OrderType>(sampleUser);
  return (
    <div className=" p-5">
      <div className=" flex flex-col sm:flex-row bg-white shadow-md rounded-md">
      <div className=" border-b-2 sm:border-r-2 sm:border-b-0 p-5 ">
      <h2 className=" text-center font-bold py-3">Order Items</h2>
      {
        order.orderItems.map(i=>(
          <OrderProductCard key={i._id} name={i.name} photo={i.photo} price={i.price} quantity={i.quantity} _id={i._id} />
        ))
      }
      </div>
      <div className=" p-5 flex flex-col gap-2">
        <h2 className=" text-center font-bold py-3" >Order Info</h2>
        <h5 className=" font-bold">User Info</h5>
        <p>Name : {order.name}</p>
        <p>Address : {`${order.address}, ${order.city}, ${order.country} ${order.pinCode}`}</p>
       
        <h5 className=" font-bold mt-4">Amount Info</h5>
        <p>Subtotal : {order.subtotal}</p>
        <p>Shipping Charges : {order.shippingCharges}</p>
        <p>Tax : {order.tax}</p>
        <p>Discount : {order.discount}</p>
        <p>Total : {order.total}</p>

        <h5 className=" font-bold mt-4">Status Info</h5>
        <p>
          Status : <span className={order.status==="Delivered"? "text-purple-700":order.status==="Shipped"? "text-gray-700" : "text-red-700"}>{order.status}</span>
        </p>
        <button onClick={()=>{ setOrder((prev)=>({
          ...prev,
          status: prev.status==="Processing"?"Shipped":"Delivered"
          
          
        }))}} className=" mt-4 hover:bg-violet-500 bg-violet-700 text-white p-2 rounded-sm">Process Status</button>
      </div>
      </div>
    </div>
  )
}

const OrderProductCard = ({name,photo,price,quantity,_id}:OrderItemType)=>(
    <div className=" flex flex-row justify-center items-center p-3 gap-4" >
      <img className=" w-12 rounded-md" src={photo} alt={name} />
      <Link to={`/product/${_id}`}>
        <p className=" font-semibold">{name}</p>
        <span>
          ${price} X {quantity} = ${price*quantity}
        </span>
      </Link>
   
    </div>
   )


export default ManageTransaction