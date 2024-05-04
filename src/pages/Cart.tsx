import CartItem from "../components/CartItem";
import data from '../assets/data.json';

import ApplyCoupon from "../components/ApplyCoupon";
const Cart = () => {
  
  return (
    <div className=" flex flex-col lg:flex-row flex-wrap m-5 lg:m-10     ">
      {/* <div className=" overflow-scroll"> */}
      <main className=" flex-1   overflow-x-auto w-full lg:overflow-hidden  ">

     
        <table className=" m-10 border-collapse   ">
          <thead>
            <tr>
            <th className=" text-left">Products</th>
            <th className=" text-left"></th>
            <th className=" p-5 ">Price</th>
            <th className=" p-5">Quantity</th>
            <th className=" p-5">Subtotal</th>
            </tr>
          </thead>
          <tbody className=" text-center border-t-[2px] pb-10 ">
           {data.cartProduct.map((item)=>(
             <CartItem img={item.img} key={item.id} name={item.name} quantity={item.quantity} price={item.price}/>

           ))}
          </tbody>
        </table>
      </main>
        {/* </div> */}
      <ApplyCoupon showbtn={true}/>
    </div>
  );
};

export default Cart;
