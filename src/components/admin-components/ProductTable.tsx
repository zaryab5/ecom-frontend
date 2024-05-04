
import { Column } from "react-table";
import Table from "./Table"
import { ReactElement, useState } from "react";




interface DataType{
    id : number;
    photo : ReactElement;
    name : string;
    price : number;
    stock : number;
    action : ReactElement
}

const columns: Column<DataType>[]=[
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"Image",
        accessor:"photo"
    },
    {
        Header:"Name",
        accessor:"name"
    },
    {
        Header:"Price",
        accessor:"price"
    },
    {
        Header:"Stock",
        accessor:"stock"
    },
    {
        Header:"Action",
        accessor:"action"
    }
];
const p1 = 'https://m.media-amazon.com/images/I/61jBnY6paeL.__AC_SX300_SY300_QL70_FMwebp_.jpg';
const p2='https://m.media-amazon.com/images/I/71iMPr0C8KL._AC_SX679_.jpg';
const p3='https://m.media-amazon.com/images/I/817Da7pNmfL._AC_SY695_.jpg';
const p4='https://m.media-amazon.com/images/I/51FRJHB7XOL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
const p5='https://m.media-amazon.com/images/I/61huvPYRPxL.__AC_SX300_SY300_QL70_FMwebp_.jpg';
import { Link } from "react-router-dom";
const product : DataType[]=[
    {
        "id":1,
        "photo" : <img src={p1}></img>,
        "name":"Laptop",
        "price":52900,
        "stock": 50,
        "action":<Link to='edit'>Manage</Link>
    },
    {
        "id":2,
        "photo" : <img src={p2}></img>,
        "name":"32 inch best monitor 2023",
        "price":4900,
        "stock": 5,
        "action":<Link to='edit'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p4}></img>,
        "name":"Headset",
        "price":3300,
        "stock": 100,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p5}></img>,
        "name":"Gaming Headset",
        "price":5999,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":3,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1000,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    },
    {
        "id":100,
        "photo" : <img src={p3}></img>,
        "name":"Bag",
        "price":1,
        "stock": 50,
        "action":<Link to='/'>Manage</Link>
    }
  ]
  
  const ProductTable = () => {
    const [p]= useState<DataType[]>(product);

  return  Table<DataType>(columns,p," w-full ","false",true)();
  
}

export default ProductTable