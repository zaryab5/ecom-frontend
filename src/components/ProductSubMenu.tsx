import { useState } from "react"
import Reviews from "./Reviews";


const ProductSubMenu = () => {
    const [active,setActive]=useState<string>('description');
  return (
    <div className=" border-b-[1px] pb-5">
        <ul className=" border-b-[1px] my-5 cursor-pointer flex flex-row gap-5">
            <li className={`hover:font-bold ${active==="description"? "font-bold border-b-2 pb-2  border-black":" "}`} onClick={()=>setActive("description")}>Descriptions</li>
            <li className={`hover:font-bold ${active==="info"? "font-bold border-b-2 pb-2  border-black":" "}`} onClick={()=>setActive("info")}>Additional Information</li>
            <li className={`hover:font-bold ${active==="review"?  "font-bold pb-2 border-b-2  border-black":" "}`} onClick={()=>setActive("review")}>Reviews</li>
        </ul>
{active==="description"?
        <div className=" my-5">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae illum facilis! Neque est dolores, impedit et nihil magnam nobis deleniti doloremque, doloribus voluptates quo? Iusto earum voluptatem ratione, commodi delectus sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum officiis alias repellat quisquam dicta assumenda dolore maiores quibusdam nisi laborum quis, quo error reprehenderit! Tempore iste iure tempora nesciunt.</p>

        </div>
    : active==="info"?
        <div className=" my-5">
            <p className=" pb-4 font-bold">Color : <span className=" text-text-2 font-normal">Red, Blue, Orange</span></p>
            <p className=" font-bold">Size : <span className=" font-normal text-text-2">S,M,L,XL</span></p>
        </div>
    : active==="review"?
        <div className=" my-5">
            <Reviews/>
        </div>
    : " "
  }
    </div>
  )
}

export default ProductSubMenu