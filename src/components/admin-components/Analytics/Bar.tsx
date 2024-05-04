import { BarChart } from "../Charts"
const month= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const Bar = () => {
  return (
    <div className=" w-full  bg-white rounded-md sm:px-10 ">
      <section className=" max-w-3xl mx-auto py-20">
        <BarChart
        data_1={[200,444,343,556,339,990]}
        data_2={[300,144,323,239,844,190]}
        title_1="Products"
        title_2="Users"
        bgColor_1={`hsl(260,50%,30%)`}
        bgColor_2={`hsl(360,90%,90%)`}
        />
        <h2 className=" uppercase text-center py-5">Top Selling Products & Top Customers</h2>
      </section>
      <section className=" max-w-3xl mx-auto sm:py-20">
        <BarChart
        horizontal={true}
        data_1={[200,444,343,556,339,990,300,144,323,239,844,190]}
        data_2={[]}
        title_1="Products"
        title_2=""
        bgColor_1={`hsl(180,40%,50%)`}
        bgColor_2="white"
        labels={month}
        />
        <h2 className=" uppercase text-center py-5">Orders Throughout the year</h2>
      </section>
    </div>
  )
}

export default Bar