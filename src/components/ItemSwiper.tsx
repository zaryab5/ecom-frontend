
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import a from "../assets/p1.webp";
// import b from "../assets/p2.webp";
// import c from "../assets/p3.webp";

import { Pagination,Navigation } from 'swiper/modules';
// import ProductCard from './ProductCard';
import { ReactElement } from 'react';

const ItemSwiper=({items,perPage=4}:{items:ReactElement[],perPage?:number})=> {
  return (
    <div className=' '>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        breakpoints={{

          640: {
            slidesPerView: perPage-2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: perPage-1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: perPage,
            spaceBetween: 50,
          },
        }}
        
      >
        {items.map((item,index)=>(
            <SwiperSlide key={index}> {item}</SwiperSlide>

        ))}

        {/* <SwiperSlide>   <ProductCard img={b} /></SwiperSlide>
        <SwiperSlide>   <ProductCard img={c} /></SwiperSlide>
        <SwiperSlide> <ProductCard img={a} /></SwiperSlide>
        <SwiperSlide>   <ProductCard img={b} /></SwiperSlide>
        <SwiperSlide>   <ProductCard img={c} /></SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default ItemSwiper