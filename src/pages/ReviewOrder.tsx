import Stepper from "../components/Stepper";
import data from "../assets/data.json";
import { FaEdit } from "react-icons/fa";
import ApplyCoupon from "../components/ApplyCoupon";

const ReviewOrder = () => {
  return (
    <div className=" m-10 flex md:flex-row flex-col flex-wrap ">
      <main className=" flex-1 lg:p-5 w-[80vw] mx-auto">
        <h2 className="  text-2xl font-bold my-10">Review</h2>
       <div className=" overflow-hidden">

      <Stepper step={3} />
       </div>
      <div>
        <h2 className=" font-bold text-lg py-5 font-inter">
          Estimated Delivery 7 Days
        </h2>
        <div>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
      <div>
        <h2 className=" font-bold text-lg pt-10 pb-2 font-inter">Shipping Address</h2>
            <h2 className=" font-bold py-2 ">Robert Fox</h2>
        <div className=" text-sm flex flex-row justify-between items-center">
           <p className=" text-text-2">Washigton Ave, Manchester, Kentucky 28482</p>
            <FaEdit className=" cursor-pointer"/>
        </div>
      </div>
      <div>
        <h2 className=" font-bold pt-10 text-lg pb-2 font-inter">Payment Method</h2>
        <div className=" text-sm flex flex-row justify-between items-center">
            <h2 className="  font-bold py-2 ">Debit Card (... ... ... 89)</h2>
            <FaEdit className=" cursor-pointer"/>
        </div>
      </div>
      </main>
      <div className="w-fit  mx-auto">


      <ApplyCoupon showbtn={true} link="success" btnValue="Place Order"/>
</div>
    </div>
  );
};

export default ReviewOrder;


const img = data.cartProduct[0].img;
const name = data.cartProduct[0].name;
const price = data.cartProduct[0].price;
const q = data.cartProduct[0].quantity;
const ReviewItem = () => (
  <div className=" flex flex-row gap-5 border-b-[1px] text-sm items-center py-2">
    <div className=" w-16 p-2 ">
      <img src={img} alt="product" />
    </div>
    <div className=" flex flex-col gap-1">
      <h2 className="  font-bold text-black">{name}</h2>
      <p className=" text-text-2">Quantity: {q}</p>
      <p className=" text-text-2">${price}</p>
    </div>
  </div>
);
