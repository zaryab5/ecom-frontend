import { CircleChart, PieChart } from "../Charts";

import data from "../../../assets/data.json"

const Pie = () => {
  return (
    <div className=" w-full  bg-white rounded-md sm:px-10 ">
      <section className=" max-w-sm mx-auto py-20">
        <PieChart
          labels={["Processing", "Shipped", "Delievered"]}
          data={[12, 9, 14]}
          backgroundColor={[
            `hsl(110,80%,80%)`,
            `hsl(110,80%,50%)`,
            `hsl(110,40%,50%)`,
          ]}
          offset={[0, 0, 50]}
        />
        <h2 className=" uppercase text-center py-5">Order Fulfilment Ratio</h2>
      </section>
      <section className=" max-w-sm mx-auto pb-20 ">
        <CircleChart
          labels={data.stock.map((i) => i.heading)}
          data={data.stock.map((i) => i.value)}
          backgroundColor={data.stock.map(
            (i) => `hsl(${i.value * 4},${i.value}%,50%)`
          )}
          offset={[0, 0, 0, 80]}
          legends={false}
        />
        <h2 className=" uppercase text-center py-5">
          Product Categories Ratio
        </h2>
      </section>
      <section className=" max-w-sm mx-auto ">
        <CircleChart
          labels={["In Stock","Out of Stock"]}
          data={[40,10]}
          backgroundColor={["hsl(269,80%,40%)","rgb(53,162,255)"]}
          cutout={"70%"}
          legends={false}
          offset={[0,  80]}
        />
        <h2 className=" uppercase text-center py-5">
          Stock Availability
        </h2>
      </section>

      <section className=" max-w-sm mx-auto ">
        <CircleChart
          labels={["Marketing Cost","Discount","Burnt","Production Cost","Net Margin"]}
          data={[20,10,23,43,12]}

          backgroundColor={[`hsl(110,80%,80%)`,
          `hsl(110,80%,50%)`,
          `hsl(110,40%,50%)`,"hsl(269,80%,40%)","rgb(53,162,255)"]}
          legends={false}
          offset={[20,  30,20,30,80]}
        />
        <h2 className=" uppercase text-center py-5">
          Revenue Distribution
        </h2>
      </section>

      <section className=" max-w-sm mx-auto py-20">
        <PieChart
          labels={["Teenager (Below 20)", "Adult (20-40)", "Older (above 40)"]}
          data={[30, 259, 14]}
          backgroundColor={[
            `hsl(10,80%,80%)`,
            `hsl(10,80%,50%)`,
            `hsl(10,40%,50%)`,
          ]}
          offset={[0, 0, 50]}
        />
        <h2 className=" uppercase text-center py-5">Users Age Group</h2>
      </section>
      <section className=" max-w-sm mx-auto ">
        <CircleChart
          labels={["Admin","Customer"]}
          data={[40,250]}
          backgroundColor={["hsl(269,80%,40%)","rgb(44,162,255)"]}
          offset={[0,  80]}
        />
      </section>

    </div>
  );
};

export default Pie;
