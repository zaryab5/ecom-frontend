
import { Column } from "react-table";
import Table from "./Table"
import { ReactElement, useState } from "react";




interface DataType{
    id : number;
    name : string;
    amount : number;
    discount : number;
    quantity: number;
    status: ReactElement;
    action : ReactElement;
}

const columns: Column<DataType>[]=[

    {
        Header:"User",
        accessor:"name"
    },
    {
        Header:"Amount",
        accessor:"amount"
    },
    {
        Header:"Discount",
        accessor:"discount"
    },
    {
        Header:"Quantity",
        accessor:"quantity"
    },
    {
        Header:"Status",
        accessor:"status"
    },
    {
        Header:"Action",
        accessor:"action"
    }
];

import { Link } from "react-router-dom";
const product : DataType[]=[
    {
        "id":1,
        "name":"John",
        "amount":52900,
        "discount": 50,
        "quantity":500,
        "status":<span className=" text-red-700">Processing</span>,
        "action":<Link to='manage'>Manage</Link>
    },
    {
        "id":1,
        "name":"Doe",
        "amount":2000,
        "discount": 30,
        "quantity":3,
        "status":<span className= " text-gray-700">Delivered</span>,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":1,
        "name":"William",
        "amount":100000,
        "discount": 150,
        "quantity":300,
        "status":<span className=" text-blue-700">Shipped</span>,
        "action":<Link to='/'>Manage</Link>
    }
  
  ]
  
  const TransactionTable = () => {
    const [p]= useState<DataType[]>(product);

  return  Table<DataType>(columns,p," w-full ","false",true)();
  
}

export default TransactionTable