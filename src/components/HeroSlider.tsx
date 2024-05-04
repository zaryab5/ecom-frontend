import { Carousel } from "@material-tailwind/react";
import banner from '../assets/banner.webp';
import { useState } from "react";
const HeroSlider = () => {
    const [move,setMove]=useState<boolean>(true);
  return (
    <div className=" w-full lg:m-10  overflow-hidden   md:mb-10">

    <Carousel
    
   loop={true}
    placeholder={""}
    autoplay={move}
    onMouseEnter={
        ()=>{
            setMove(false);
        }
    }
    onMouseLeave={
        ()=>{
            setMove(true);
        }
    }
    className="rounded-xl"
    navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
              <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
                />
                ))}
        </div>
      )}
    >
      <img
        src={banner}
        alt="image 1"
        className="h-full w-full object-contain hover:scale-105 transition-transform ease-in duration-300 cursor-pointer"

        />
      <img
        src={banner}
        alt="image 2"
        className="h-full w-full object-contain hover:scale-105 transition-transform ease-in duration-300 cursor-pointer"

        />
      <img
        src={banner}
        alt="image 2"
        className="h-full w-full object-contain hover:scale-105 transition-transform ease-in duration-300 cursor-pointer"
        />
      
    </Carousel>
 
        </div>
  )
}

export default HeroSlider