
import CustomerTable from "../../components/admin-components/CustomerTable"



const Customer = () => {
  return (
    <div className=" w-full p-5">
      <div className=" flex justify-between flex-row items-center ">

      <h2 className=" font-bold text-2xl my-5">Customers</h2>

      </div>
      <CustomerTable />

    </div>
  )
}

export default Customer