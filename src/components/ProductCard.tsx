// const p1 = 'https://m.media-amazon.com/images/I/61jBnY6paeL.__AC_SX300_SY300_QL70_FMwebp_.jpg';
import { useState } from 'react'
import {  FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'


type cardProps={
    img:string
}
const ProductCard = ({img}:cardProps) => {
    const [isHeart,setHeart]=useState<boolean>(false);
  return (
    <div className=" mx-auto   w-60 flex flex-col gap-3 mb-20">
        <div>

        <div className=' overflow-hidden relative flex flex-col items-center justify-center p-10 bg-placeholder h-60 group cursor-pointer  '>
        <img className='group-hover:scale-90 transition-transform duration-300 ease-in-out'  src={img} alt="" />
        <div onClick={()=>setHeart(!isHeart)} className=' absolute top-4 right-3 bg-white rounded-full p-2 border-[1px] border-teal-200 cursor-pointer '>           
         {isHeart? <FaHeart color='red'/> :<FaRegHeart/>}
        </div>
        <div className=' absolute top-3 left-3 text-sm rounded-md bg-secondary-3 text-white p-[5px]'>-35%</div>
        <button className=' absolute bottom-[-5rem]  group-hover:bottom-0  transition-all ease-in duration-300  w-full text-white bg-black rounded-b p-2 text-center font-bold cursor-pointer'>Add to Cart</button>
        </div>
        </div>
        <h2 className=' text-xl font-semibold '>LCD Gaming Monitor</h2>
        <p className=' text-xl text-text-2'>$280 <span className=" line-through">$400</span></p>
        <div className=' flex gap-1 flex-row items-center text-star'>
            <FaStar size={22}/>
            <FaStar size={22}/>
            <FaStar size={22}/>
            <FaStar size={22}/>
            <FaStar className=' text-star-placeholder' size={22}/>
            <span className=' text-text-2'>(88)</span>
        </div>
    </div>
  )
}

export default ProductCard