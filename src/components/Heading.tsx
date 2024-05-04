

import CountDown from './CountDown';

type headingProps={
  'type':string,
  'heading':string,
  'counter'?:boolean
}
const Heading = ({type,heading,counter=false}:headingProps) => {

  
  return (
    <div className="  lg:mx-10 p-10">
    <div className=" flex flex-row gap-5">
        <div className="  w-5 rounded-md bg-secondary-3"></div>
        <h5 className=" p-2 font-bold text-xl">{type}</h5>
    </div>
    <div className=' flex flex-col md:flex-row items-center md:gap-20'>

        <h2 className=" font-extrabold text-2xl my-10 font-inter">{heading}</h2>  
       {counter? <CountDown/>:''}
    </div>

    </div>
  )
}

export default Heading