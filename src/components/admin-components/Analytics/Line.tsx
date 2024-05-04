import { LineChart } from "../Charts"
const month= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const Line = () => {
  return (
    <div className=" w-full  bg-white rounded-md sm:px-10 ">
    
      <section className=" max-w-2xl mx-auto py-20">
         <LineChart
         data={[
          200,333,444,556,355,224,543,543,1777,3432,344,1200
         ]}
         label="Users"
         borderColor="rgb(53,162,255)"
         backgroundColor="rgba(53,162,255,0.5)"
         labels={month}
         />
         <h2 className="uppercase text-center py-5">Active Users</h2>
      </section>

      <section className=" max-w-2xl mx-auto py-20">
         <LineChart
         data={[
          24000,33300,44400,40000,35500,22400,5430,54300,17770,34320,3440,1200
         ]} 
         label="Revenue"
         borderColor="hsl(129,80%,40%)"
         backgroundColor="hsla(129,80%,40%,0.4)"
         labels={month}
         />
         <h2 className="uppercase text-center py-5">Total Revenue</h2>
      </section>

      <section className=" max-w-2xl mx-auto py-20">
         <LineChart
         data={[
          200,333,444,1560,355,1248,543,543,1777,2432,344,1200
         ]}
         label="Products"
         borderColor="hsl(269,80%,40%)"
         backgroundColor="hsla(269,80%,40%,0.4)"
         labels={month}
         />
         <h2 className="uppercase text-center py-5">Total Products (SKU)</h2>
      </section>

      <section className=" max-w-2xl mx-auto py-20">
         <LineChart
         data={[
          200,333,444,556,355,224,543,543,177,343,344,200
         ]}
         label="Discount"
         borderColor="hsl(69,80%,40%)"
         backgroundColor="hsla(69,80%,40%,0.4)"
         labels={month}
         />
         <h2 className="uppercase text-center py-5">Discount Allotted</h2>
      </section>
    </div>
  )
}

export default Line