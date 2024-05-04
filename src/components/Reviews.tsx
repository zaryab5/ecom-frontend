import { useState } from "react";

import {  FaStar } from "react-icons/fa";
import Ratings from "./Ratings";
import person from "../assets/person.jpg";
// import { RxAvatar } from "react-icons/rx";

const Reviews = () => {
  return (
    <div>
      {/* reviews  */}
      <div>
        <h3 className=" text-lg font-inter font-bold my-4">Customer Reviews</h3>
<DisplayReviews/>
<DisplayReviews/>
      </div>
      {/* add reveiw  */}
      <AddReview/>
    </div>
  );
};

const DisplayReviews=()=>{
    return(
        <div className=" font-inter  border-b-[1px] my-5">
           <div className=" flex flex-row gap-2 my-2">
            {/* <RxAvatar size={46} color="grey"/> */}
           
            <img src={person} width={46} className=" rounded-full   box-content  hover: "  alt="" />

            
            <div className=" flex flex-col gap-1">
                <h3 className=" font-bold cursor-pointer">Mark Willaim</h3>
                <Ratings stars={4}/>
            </div>
           </div>
           <div >
            <p className=" py-2 font-inter  text-sm">Lorem ipsulendus molestiae, dicta pariatur! Alias fuga tempore sunt aut repellat? Nobis, adipisci.</p>
            <p className=" my-2 text-sm font-semibold text-text-2">Posted on <span className=" text-black ">June 05, 2023</span></p>
           </div>
        </div>
    )
}

const AddReview = () => {
    
  return (
    <div>
      <h3 className=" font-inter text-lg font-bold  my-2">Add your Review</h3>
      <p className=" text-text-2 text-sm">Your Rating</p>
      <div className=" my-2 flex gap-1 flex-row items-center  text-text-2 cursor-pointer">
       
        <Stars/>
       
      </div>
      <form className="max-w-md my-5  ">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="name"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
        </div>


    
          <div className="relative z-0 w-full mb-5 group">
            <textarea
             
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Review
            </label>
          </div>
       
        <button
          type="submit"
          className="text-white  bg-black hover:bg-black/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          
          Submit
        </button>
      </form>
    </div>
  );
};


const Stars=()=>{

    const [currentVal,setCurrentVal]=useState<number>(0);
    const [hoverVal,setHoverVal]=useState<number>(0);
    const totalStar=Array(5).fill(0);

    const handleClick=(i:number)=>{
        setCurrentVal(i);
    }

    const handleMoverOver=(i:number)=>{
        setHoverVal(i);
    }
    const handleMouseLeave=()=>{
        setHoverVal(0);
    }
   
    const color={
        orange:"#FFBA5A",
        grey:"#a9a9a9"
    }
    return(
     
        <div className=" flex flex-row gap-1">
            {totalStar.map((_,index)=>(
              <FaStar
              key={index}
              size={20}
              color={(hoverVal || currentVal)>index? color.orange:color.grey}
              onClick={()=>handleClick(index+1)}
               onMouseOver={()=>handleMoverOver(index+1)}
               onMouseLeave={handleMouseLeave}
              />
            ))}
        </div>
    
    )
}



export default Reviews;
