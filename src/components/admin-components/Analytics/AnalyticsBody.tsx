import { useSearchParams } from "react-router-dom";
import Bar from "./Bar";
import Line from "./Line";
import Pie from "./Pie";



const AnalyticsBody = () => {
    let [searchParams] = useSearchParams();
    
  return (
   <>
        {searchParams.get("type")==="bar"?<Bar/>:searchParams.get("type")==="line"?<Line/>:searchParams.get("type")==="pie"?<Pie/>:""}
   </>
    
  )
}

export default AnalyticsBody