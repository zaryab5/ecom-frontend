
import { Column } from "react-table";
import Table from "./Table"




interface DataType{
    id : string;
    quantity : number;
    amount : number;
    discount : number;
    status : string
}

const columns: Column<DataType>[]=[
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"Qunatity",
        accessor:"quantity"
    },
    {
        Header:"Discount",
        accessor:"discount"
    },
    {
        Header:"Amount",
        accessor:"amount"
    },
    {
        Header:"Status",
        accessor:"status"
    }
];
const DashboardTable = ({data=[]}:{data:DataType[]}) => {

  return  Table<DataType>(columns,data,"shadow-md h-full rounded-sm","Top Transactions")();
  
}

export default DashboardTable