
import { useSearchParams } from "react-router-dom";

const AnalyticsNav = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    
  return (
    <div>
        <ul className=" flex flex-row justify-center list-none gap-5 py-5">
            <li  onClick={()=>{
                   setSearchParams({"type":"bar"});
                   console.log(searchParams);
                   
            }} className={`${searchParams.get("type")==="bar"?"border-b-2 font-semibold":""} cursor-pointer hover:border-b-2 border-black pb-2`} >
                
                Bar Charts
              
            </li>
            <li onClick={()=>{
                   setSearchParams({"type":"pie"});
            }} className={`${searchParams.get("type")==="pie"?"border-b-2 font-semibold":""} cursor-pointer hover:border-b-2 border-black pb-2`}>
                
                Pie Charts
               
            </li>
            <li onClick={()=>{
                   setSearchParams({"type":"line"});
            }} className={`${searchParams.get("type")==="line"?"border-b-2 font-semibold":""} cursor-pointer hover:border-b-2 border-black pb-2`}>
               
                Line Charts
              
            </li>
        </ul>
    </div>
  )
}

export default AnalyticsNav