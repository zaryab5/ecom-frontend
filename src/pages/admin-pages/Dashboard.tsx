// import AdminSidebar from "../components/AdminSidebar"
// import { Outlet } from "react-router-dom"

import { FaSearch } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
//#763fee
import data from '../../assets/data.json';

import { BarChart, CircleChart } from "../../components/admin-components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../../components/admin-components/DashboardTable";
const Dashboard = () => {
  return (
  
    <main className="w-full px-5 ">
      <SearchBar />

      <div className=" flex flex-row justify-between flex-wrap my-4">
        <WidgetBox
          heading="Revenue"
          value={40002300}
          amount={true}
          percentage={80}
          color="rgb(0,115,255)"
        />
        <WidgetBox
          heading="Users"
          value={30000}
          percentage={-30}
          color="rgb(255,196,0)"
        />
        <WidgetBox
          heading="Sales"
          value={2800039}
          amount={true}
          percentage={40}
          color="rgb(0,198,202)"
        />
        <WidgetBox
          heading="Funds"
          value={392900}
          amount={true}
          percentage={90}
          color="rgb(0,115,255)"
        />
      </div>
      <div className="flex flex-row justify-between flex-wrap lg:flex-nowrap gap-5 my-4 ">
        <div className="chart text-center w-full pt-5 bg-white rounded-md  ">
          <h2 className=" text-center opacity-50 tracking-wider  font-bold">
            REVENUE & TRANSACTIONS
          </h2>
          <div className=" p-5 min-h-40">

         
          <BarChart data_1={[300,144,433,655,237,755,190]}
          data_2={[200,444,343,778,237,455,990]}
          title_1="Revenue"
          title_2="Transaction"
          bgColor_1="rgb(0,115,255)"
          bgColor_2="rgb(53,162,235,0.8)"
          />
           </div>
        </div>
        <div className="stock max-w-[16rem] w-full pt-5 bg-white rounded-md ">
          <h2 className=" font-bold mb-5 text-center opacity-50 tracking-wider">
            INVENTORY
          </h2>
          <div>
            {data.stock.map((item) => {
              return (
                <StockItem
                  key={item.heading}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value * 4},${item.value}%,50%)`}
                />
              );
            })}
          </div>
        </div>
       
      </div>
      <div className="section-3 flex flex-row flex-wrap lg:flex-nowrap w-full gap-4 mb-5">
            <div className=" relative chart max-w-80 min-w-80 w-full bg-white rounded-sm shadow-md p-5">
            <h2 className="  text-center opacity-50 tracking-wider  font-bold mb-6">
                    Gender Ratio</h2>
                   <CircleChart labels={["Female","Male"]} data={[12,19]} backgroundColor={["hsl(340,82%,56%)","rgb(53,162,235)"]} cutout={90}/>

                <p className=" text-3xl text-red-950 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <BiMaleFemale/>
                </p>
                    
            </div>
            
            <div className="transactions w-full ">
                <DashboardTable data={data.transactions.slice(0,6)}/>
            </div>
        </div>
    </main>
  );
};

const SearchBar = () => {
  return (
    <div className="bar border-b-[1px] py-2  border-violet-200 w-full flex justify-center align-middle flex-row">
      <FaSearch color="#763fee" size={"20px"} className=" m-2" />
      <input
        type="text"
        className=" p-2 w-full outline-none focus:outline-none bg-greenish"
        placeholder="Search here..."
      />
      <IoPersonCircle color="#763fee" size={"30px"} className=" m-1" />
    </div>
  );
};

interface WidgetProps {
  heading: string;
  value: number;
  amount?: boolean;
  percentage: number;
  color: string;
}

const WidgetBox = ({
  heading,
  value,
  amount = false,
  percentage,
  color,
}: WidgetProps) => {
  return (
    <article className=" border-2 bg-white border-r-2 p-5 shadow-md my-5 min-w-60 flex flex-row justify-between items-center rounded-md">
      <div>
        <p className=" opacity-[80%]">{heading}</p>
        <h4 className=" font-bold text-xl mt-2">
          {amount ? `$${value}` : value}
        </h4>
        {percentage > 0 ? (
          <span className=" flex my-2 items-center gap-1">
            <HiTrendingUp color="green" /> +{percentage}%
          </span>
        ) : (
          <span className=" flex my-2 items-center gap-1">
            <HiTrendingDown color="red" /> {percentage}%
          </span>
        )}
      </div>
      <div
        style={{
          background: `conic-gradient(${color} ${
            (Math.abs(percentage) / 100) * 360
          }deg, rgb(255,255,255) 0)`,
        }}
        className=" w-20 h-20 relative grid place-items-center rounded-[100%] bgrad before:content-[' '] before:bg-white before:w-[80%] before:h-[80%] before:absolute before:rounded-full"
      >
        <span style={{ color: color }} className=" relative">
          {percentage}%
        </span>
      </div>
    </article>
  );
};

interface stockItemProps {
  heading: string;
  color: string;
  value: number;
}
const StockItem = ({ heading, color, value }: stockItemProps) => {
  return (
    <div className=" flex flex-row  items-center gap-4 p-3 px-5">
      <h2 className=" text-sm">{heading}</h2>
      <div className=" ml-2 w-24 h-2 flex-none bg-stone-300 rounded-sm ">
        <div
          className=" h-full"
          style={{ background: color, width: value }}
        ></div>
      </div>
      <span className=" text-sm font-bold">{value}%</span>
    </div>
  );
};
export default Dashboard;
