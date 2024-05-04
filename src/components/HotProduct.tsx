import CountDown from "./CountDown"

const HotProduct = ({img,name}:{img:string,name:string}) => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between gap-10 bg-black text-white items-center p-10   lg:p-20 my-10  mx-10 lg:mx-20">
          <div className=" flex flex-col justify-center gap-5 ">

          <h2 className=" text-orange-400 font-bold">Categories</h2>
          {/* <h3 className=" text-2xl text-white">Enchanse Your Music Experience</h3> */}
          <h3 className=" font-inter pr-10 font-bold text-xl md:text-3xl text-white">{name}</h3>
          <CountDown/>
           <button className=" px-5 py-2 w-40 rounded-sm bg-secondary-3 hover:bg-btn-hover-2">Buy Now</button>
          </div>
          <div className=" w-full md:w-[50%] relative">
            {/* <div className=" w-full h-full shadow-2xl rounded-full   z-10 bg-white absolute"></div> */}
            <img className="  absolute top-0 bottom-0 my-auto  w-[90%] z-50" src={img} alt="" />
            <div className=" h-52   blur-3xl opacity-30 z-[1]  bg-white shadow-2xl shadow-white"></div>
          </div>
    </div>
  )
}

export default HotProduct