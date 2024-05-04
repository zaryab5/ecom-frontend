
import {  Outlet } from "react-router-dom"

// import {  useState } from "react"
// import Stepper from "../components/Stepper"



const Checkout = () => {

    // const [step,setStep]=useState<number>(1);
    
  return (
    <div className=" m-10 flex md:flex-row flex-col flex-wrap ">
     
        <main className=" flex-1 p-5">
        <h2 className="  text-2xl font-bold my-10">Shipping Address</h2>
          
           <div className="  ">
           <Outlet/>
           
          
           </div>
    {/* <Link to={   step===1?'payment' : step===2?'review':""} onClick={()=>setStep((prev)=>(prev<3?prev+1:3))}  className="text-white block my-10 bg-secondary-3 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Deliver Here</Link> */}

        </main>
        <div>
        

        </div>
    </div>
  )
}

export default Checkout





// const Stepper=({page}:{page:number})=>{
//     const {pathname}=useLocation();

//     const [step,setStep]=useState<number>(page);
//     // console.log(pathname.split('/').pop());
    
//   const [active,setActive]=useState<string>(pathname.split('/').pop()!);

//     setActive(pathname.split('/').pop()!);

//     if(active==='review')
//      setStep(3);
//     else if(active==='payment')
//     setStep(2);


//     return (
//     <ul className="relative flex flex-row gap-x-2">

//     <li className="shrink basis-0 flex-1 group">
//       <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//         <span className={`size-7 flex justify-center items-center flex-shrink-0  font-medium text-gray-800 rounded-full bg-violet-700   dark:text-white`}>
          
//           <FaHome/>
//         </span>
//         <div className="ms-2 w-full h-px flex-1  group-last:hidden bg-gray-700 "></div>
//       </div>
//       <div className="mt-3">
//         <span className=" block text-sm font-medium text-gray-800 ">
//           Address
//         </span>
//       </div>
//     </li>
   
//     <li className="shrink basis-0 flex-1 group">
//       <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//         <span className={`${step=== 2?'bg-violet-700': step=== 3?'bg-violet-700': 'bg-star-placeholder'} size-7 flex justify-center items-center flex-shrink-0  font-medium text-gray-800 rounded-full  dark:text-white`}>
//           <FaWallet/>
//         </span>
//         <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
//       </div>
//       <div className="mt-3  ">
//         <span className=" block text-sm font-medium text-gray-800">
//           Payment
//         </span>
//       </div>
//     </li>
    
//     <li className="shrink basis-0 flex-1 group">
//       <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
//         <span className={`${step===3?'bg-violet-700': 'bg-star-placeholder'} size-7 flex justify-center items-center flex-shrink-0 font-medium text-gray-800 rounded-full  dark:text-white`}>
//           <FaNewspaper/>
//         </span>
//         <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
//       </div>
//       <div className="mt-3 text-left">
//         <span className="block text-sm font-medium text-gray-800 ">
//           Review
//         </span>
//       </div>
//     </li>
   
//   </ul>
// )

//     }
