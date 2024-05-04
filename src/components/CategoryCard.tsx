
import { ReactElement } from "react"

const CategoryCard = ({name,icon}:{name:string,icon:ReactElement}) => {
  return (
    <div className=" mx-auto hover:bg-secondary-3 hover:text-white flex flex-col items-center border-2 rounded-md p-5  w-48 cursor-pointer transition-all ease-in-out duration-200 h-40 text-center mb-16">
        <div>{icon}</div>
        <h2>{name}</h2>
    </div>
  )
}

export default CategoryCard