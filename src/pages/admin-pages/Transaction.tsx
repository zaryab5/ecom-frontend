
import TransactionTable from "../../components/admin-components/TransactionTable"



const Customer = () => {
  return (
    <div className=" w-full p-5">
      <div className=" flex justify-between flex-row items-center ">

      <h2 className=" font-bold text-2xl my-5">Transactions</h2>

      </div>
      <TransactionTable />

    </div>
  )
}

export default Customer