import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings=({stars,totalReviews=0}:{stars:number,totalReviews?:number})=>{
    const ratingStar= Array.from({length:5},(_,index)=>{
 
    let num=index+0.5;
        return(
            <span className=" text-orange-400 " key={index}>
               { stars>= index+1?(
                <FaStar/>
               ): stars>=num?(
                <FaStarHalfAlt/>
               ):(
                <FaRegStar />
               )}

            </span>
        )
    })


return (
    <div className=" flex flex-row gap-2 items-center">
        <div className=" flex flex-row items-center ">{ratingStar}</div>
      {
      totalReviews!=0?
      <div className=" text-sm text-text-2">({totalReviews} Reviews)</div>
      :""
    }  
    </div>
)
}

export default Ratings