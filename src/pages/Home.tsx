import CategoryCard from "../components/CategoryCard";
import Heading from "../components/Heading";
import HeroCategory from "../components/HeroCategory";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";

import a from "../assets/p1.webp";
import b from "../assets/p2.webp";
import c from "../assets/p3.webp";
import s from "../assets/hot.png";
import ItemSwiper from "../components/ItemSwiper";
import { CiCamera, CiDeliveryTruck, CiHeadphones, CiLaptop, CiStopwatch } from "react-icons/ci";
import HotProduct from "../components/HotProduct";

import woman from "../assets/woman.png";
import perfumes from "../assets/perfumes.png";
import buffer from "../assets/buffers.png";
import ps from "../assets/ps.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <section className=" flex flex-row mb-10 mx-0  md:mx-5 lg:mx-10">
        <HeroCategory  />
        <HeroSlider />
      </section>
      <section className=" my-10">
        <Heading counter={true} type={"Today's"} heading={"Flash Sales"} />
        {/* <div className=" mx-10 flex flex-row gap-10 flex-wrap"> */}
        <div className="  mx-10 lg:mx-20 border-b-2 pb-5">
          <ItemSwiper
          
            items={[
              <ProductCard img={a} />,
              <ProductCard img={b} />,
              <ProductCard img={c} />,
              <ProductCard img={a} />,
              <ProductCard img={b} />,
              <ProductCard img={c} />,
            ]}
          />
          <div className=" text-center my-5">
            <button className=" bg-secondary-3 hover:bg-btn-hover-2 text-white px-6 py-4 rounded-sm">
              View All Products
            </button>
          </div>
        </div>
      </section>
      <section className=" my-10 ">
        <Heading type={"Categories"} heading={"Browse By Category"} />
        <div className="  mx-10  lg:mx-20 border-b-2 pb-10">
          <ItemSwiper
            perPage={5}
            items={[
              <CategoryCard name="Camera" icon={<CiCamera size={80} />} />,
              <CategoryCard
                name="HeadPhones"
                icon={<CiHeadphones size={80} />}
              />,
              <CategoryCard name="Watch" icon={<CiStopwatch size={80} />} />,
              <CategoryCard name="Computer" icon={<CiLaptop size={80} />} />,
              <CategoryCard name="Phone" icon={<CiCamera size={80} />} />,
              <CategoryCard name="Camera" icon={<CiCamera size={80} />} />,
            ]}
          />
        </div>
      </section>
      <section className=" my-10">
        <Heading type={"This Month"} heading={"Best Selling Products"} />
        {/* <div className=" mx-10 flex flex-row gap-10 flex-wrap"> */}
        <div className="  mx-10 lg:mx-20 border-b-2 pb-5">
          <ItemSwiper
            items={[
              <ProductCard img={a} />,
              <ProductCard img={b} />,
              <ProductCard img={c} />,
              <ProductCard img={a} />,
              <ProductCard img={b} />,
              <ProductCard img={c} />,
            ]}
          />
        </div>
      </section>
      <section>
        <HotProduct img={s} name="Enchanse Your Music Experience" />
      </section>
      <section className=" my-10 ">
        <Heading type={"Our Products"} heading={"Explore Our Products"} />
        {/* <div className=" mx-10 flex flex-row gap-10 flex-wrap"> */}
        <div className=" border-b-2 mx-10 lg:mx-20">
          <div className="  pb-5">
            <ItemSwiper
              items={[
                <div className=" flex flex-col gap-4">
                  <ProductCard img={a} />
                  <ProductCard img={b} />
                </div>,
                <div className=" flex flex-col gap-4">
                  <ProductCard img={c} />
                  <ProductCard img={a} />
                </div>,
                <div className=" flex flex-col gap-4">
                  <ProductCard img={s} />
                  <ProductCard img={c} />
                </div>,
                <div className=" flex flex-col gap-4">
                  <ProductCard img={b} />
                  <ProductCard img={b} />
                </div>,
                <div className=" flex flex-col gap-4">
                  <ProductCard img={b} />
                  <ProductCard img={b} />
                </div>,
              ]}
            />
          </div>
          <div className=" text-center mb-10">
            <button className=" bg-secondary-3 hover:bg-btn-hover-2 text-white px-6 py-4 rounded-sm">
              View All Products
            </button>
          </div>
        </div>
      </section>
      <section >
        <Heading type={"Featured"} heading={"New Arrival"} />
        {/* <div className=" mx-10 lg:mx-20 mt-[-24px] grid grid-cols-2 grid-rows-2 gap-10"> */}
        <div className=" mx-10 lg:mx-20 mt-[-24px] grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10">
          
          <div
            className=" h-[540px] row-span-2 rounded-md flex flex-col justify-end p-10 gap-3 text-white bg-black bg-center w-full bg-contain  bg-no-repeat "
            style={{ backgroundImage: `url(${ps})` }}
          >
            <h2 className=" font-bold text-2xl">PlayStation 5</h2>
            <p>Black and White version of PS5 coming out on sale</p>
            <div className=" group flex flex-row gap-3 items-center">
              <Link
                to={"/"}
                className=" w-fit py-2  border-b-2 border-white font-bold"
              >
                Shop Now
              </Link>
              <FaArrowRight className=" hidden group-hover:block " />
            </div>
          </div>
          <div
            className=" rounded-md flex flex-col justify-end p-10 gap-3 text-white bg-black bg-center w-full bg-contain  bg-no-repeat "
          
          style={{ backgroundImage: `url(${woman})` }}>
          <h2 className=" font-bold text-2xl">Women’s Collections</h2>
            <p>Featured woman collections that give you another vibe.</p>
            <div className=" group flex flex-row gap-3 items-center">
              <Link
                to={"/"}
                className=" w-fit py-2  border-b-2 border-white font-bold"
              >
                Shop Now
              </Link>
              <FaArrowRight className=" hidden group-hover:block " />
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">

          <div 
                      className=" rounded-md flex flex-col justify-end p-10 pb-5 gap-2 text-white bg-black bg-center w-full bg-contain  bg-no-repeat "

          style={{ backgroundImage: `url(${buffer})` }}>
          <h2 className=" font-bold text-2xl">Speakers</h2>
            <p>Amazon wireless speakers</p>
            <div className=" group flex flex-row gap-3 items-center">
              <Link
                to={"/"}
                className=" w-fit py-2  border-b-2 border-white font-bold"
              >
                Shop Now
              </Link>
              <FaArrowRight className=" hidden group-hover:block " />
            </div>
          </div>
          <div
            className=" rounded-md flex flex-col justify-end p-10 pb-5 gap-2 text-white bg-black bg-center w-full bg-contain  bg-no-repeat "
           
          style={{ backgroundImage: `url(${perfumes})` }}>
          <h2 className=" font-bold text-2xl">Perfumes</h2>
            <p>GUCCI INTENSE OUD ED</p>
            <div className=" group flex flex-row gap-3 items-center">
              <Link
                to={"/"}
                className=" w-fit py-2  border-b-2 border-white font-bold"
              >
                Shop Now
              </Link>
              <FaArrowRight className=" hidden group-hover:block " />
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className=" my-20 flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center">
      <div className=" flex flex-col justify-center items-center text-center p-3">
          <div className=" w-fit p-2 rounded-full border-[10px]  bg-black text-white"><CiDeliveryTruck size={50}/></div>
          <h3 className=" uppercase font-bold py-2">FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center p-3">
          <div className=" w-fit p-2 rounded-full border-[10px] bg-black text-white"><CiHeadphones size={50}/></div>
          <h3 className=" uppercase font-bold py-2">Customer Service</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center p-3 ">
          <div className=" w-fit p-2 rounded-full border-[10px] bg-black text-white"><MdOutlineVerifiedUser size={50} /></div>
          <h3 className=" uppercase font-bold py-2">MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
