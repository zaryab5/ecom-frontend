
import { Column } from "react-table";
import Table from "./Table"
import { ReactElement, useState } from "react";




interface DataType{
    id : number;
    photo : ReactElement;
    name : string;
    gender : string;
    email : string;
    role : string;
    action : ReactElement
}

const columns: Column<DataType>[]=[
    {
        Header:"Image",
        accessor:"photo"
    },
    {
        Header:"Name",
        accessor:"name"
    },
    {
        Header:"Gender",
        accessor:"gender"
    },
    {
        Header:"Email",
        accessor:"email"
    },
    {
        Header:"Role",
        accessor:"role"
    },
    
    {
        Header:"Action",
        accessor:"action"
    }
];
const a="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1707512472~exp=1707513072~hmac=24fdfdf469f12e3e64a3153fd9427541753b05185f15dec9b60e83230d60270c";
const b="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1707512540~exp=1707513140~hmac=9e341d2befdc752fb8dc6609edf63f37dca0d54bdb2005959b1d881d3a6e4b15";
const c="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1707512574~exp=1707513174~hmac=b25bd26988ae3c1f4411b08c15730ecb9ca05bfbdf4928ddbb1c2cf335f48e90";
import { FaTrash } from "react-icons/fa";
const product : DataType[]=[
    {
        "id":1,
        "photo" : <img src={a}></img>,
        "name":"Zaryab",
        "email":"email@mail.com",
        "role": "user",
        "gender":"male",
        "action":<button><FaTrash color="red"/></button>
    },
    {
        "id":2,
        "photo" : <img src={b}></img>,
        "name":"Ali",
        "email":"email@mail.com",
        "role": "user",
        "gender":"male",
        "action":<button><FaTrash color="red"/></button>
    },
    {
        "id":3,
        "photo" : <img src={c}></img>,
        "name":"Haider",
        "email":"email@mail.com",
        "role": "user",
        "gender":"male",
        "action":<button><FaTrash color="red"/></button>
    }
  
  ]
  
  const CustomerTable = () => {
    const [data]= useState<DataType[]>(product);

  return  Table<DataType>(columns,data," w-full ","false",true)();
  
}

export default CustomerTable