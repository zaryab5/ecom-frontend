import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import ProductSubMenu from "../components/ProductSubMenu";
import Ratings from "../components/Ratings";
import ItemSwiper from "../components/ItemSwiper";
import ProductCard from "../components/ProductCard";


import a from "../assets/p1.webp";
import b from "../assets/p2.webp";
import c from "../assets/p3.webp";

const ProductDetail = () => {
  const [Quantity, setQuantity] = useState<number>(1);
  const [isHeart, setHeart] = useState<boolean>(false);

  return (
    <div>
        <div className=" flex flex-col max-w-[80vw] mx-auto">
      <div className=" flex flex-col lg:flex-row gap-10 my-10 ">
        <div className=" w-full ">
          <Caurosal />
        </div>
        <div className=" flex flex-col gap-4 w-full">
          <h2 className=" font-bold text-2xl">YK Disny</h2>
          <p>Girls Pink Moana Printed Dress</p>
          
           <Ratings stars={1.5} totalReviews={200}/>
          <p className=" font-bold">
            $80.0{" "}
            <span className=" font-normal line-through text-text-2">$100</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            voluptates optio quam nisi assumenda repellendus nobis quibusdam
            est, reiciendis eligendi soluta, animi blanditiis commodi nulla,
            unde atque quo dolorem tempore!
          </p>
          <p className=" font-bold">
            Stock :{" "}
            <span className=" font-normal text-green-800"> Available</span>
          </p>
          <div className=" font-bold pb-5">
            <p className=" pb-4">Size :</p>
            <div className=" flex flex-row gap-3">
              <div className=" border-2 px-4 py-2 rounded-md border-gray-500 font-normal cursor-pointer hover:bg-secondary-3 hover:text-white text-green-800">
                {" "}
                S
              </div>
              <div className=" border-2 px-4 py-2 rounded-md border-gray-500 font-normal cursor-pointer hover:bg-secondary-3 hover:text-white text-green-800">
                {" "}
                M
              </div>
              <div className=" border-2 px-4 py-2 rounded-md border-gray-500 font-normal  cursor-pointer hover:bg-secondary-3 hover:text-white text-green-800">
                {" "}
                L
              </div>
              <div className=" border-2 px-4 py-2 rounded-md border-gray-500 font-normal  cursor-pointer hover:bg-secondary-3 hover:text-white text-green-800">
                {" "}
                XL
              </div>
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <div className=" flex flex-row items-center justify-center gap-4 border-2 rounded-lg p-2 px-4 border-gray-500">
              <FiMinus
                onClick={() => (Quantity != 0 ? setQuantity(Quantity - 1) : "")}
                className=" cursor-pointer"
              />
              <p className=" select-none">{Quantity}</p>
              <GoPlus
                onClick={() => setQuantity(Quantity + 1)}
                className=" cursor-pointer"
              />
            </div>
            <button className=" py-3 px-16 rounded-md bg-black hover:bg-black/80 text-white">
              Add to Cart
            </button>
            <button
              onClick={() => setHeart(!isHeart)}
              className="  p-2 px-4 rounded-md border-2 border-gray-500"
            >
              {" "}
              {isHeart ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>

      <div>
        <ProductSubMenu/>
      </div>
      <div>
        <h2 className=" font-inter font-bold text-3xl my-10">Related Products</h2>
        <div className=" border-b-2 pb-5">
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
      </div>
      </div>
    </div>
  );
};

const Caurosal = () => {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



export default ProductDetail;
