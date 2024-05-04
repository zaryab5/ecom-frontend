
import { Column, TableOptions, useTable,useSortBy,usePagination } from "react-table"
import { TiArrowUnsorted } from "react-icons/ti";
import { GoSortDesc ,GoSortAsc} from "react-icons/go";
import "../../styles/ProductTable.css";
import {  FaStepBackward, FaStepForward } from "react-icons/fa";


function Table<T extends Object>(columns: Column<T>[],data:T[],containerClassName:string,heading: string,showPag:boolean=false){
    
    const options : TableOptions<T> = {
        columns,
        data,
        initialState:{
            pageSize: 5
        }
    }
    
    const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex}}= useTable(options,useSortBy,usePagination);
     const classes=containerClassName.trim();

    return function Table(){
          return <div className={`${classes} overflow-x-auto bg-white  w-full p-5`}>
                         
                    {heading==="false" ? " " :  <h2 className=" text-center opacity-50 tracking-wider  font-bold mb-5">{heading}</h2>}
                 <table className=" border-collapse w-full" {...getTableProps()}>
                         <thead>
                            {
                                headerGroups.map((headerGroup)=>(
                                    <tr{...headerGroup.getHeaderGroupProps()}>
                                    { 
                                        headerGroup.headers.map((column:any)=>(
                                            <th className=" opacity-60 p-2 pr-5 text-left align-middle" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            <div className=" flex flex-row w-full gap-2 items-center">
                                            {column.render("Header")}

                                            {column.isSorted ? <span>
                                                {column.isSortedDesc? <GoSortDesc/>:<GoSortAsc/> }                                           
                                                </span> :  <TiArrowUnsorted/>}
                                            </div>
                                            </th>
                                        ))
                                    }
                                    </tr>
                                ))
                            }
                         </thead>
                          <tbody {...getTableBodyProps()}>
                                {
                                    page.map(row=>{
                                        prepareRow(row);
                                        return <tr className=" border-b-[1px] border-b-violet-200" {...row.getRowProps()}>
                                            {
                                                row.cells.map(cell=>(
                                                    <td className=" p-2 text-left align-middle" {...cell.getCellProps()}>
                                                        {cell.render("Cell")}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    })
                                }

                          </tbody>
                 </table>
                 {
                      showPag && (
                        <div className=" flex justify-end flex-row gap-5 items-center m-5">
                            {/* <button className=" bg-violet-700 p-4" disabled={!canPreviousPage} onClick={previousPage}>Prev</button> */}
                            <FaStepBackward className={`cursor-pointer ${!canPreviousPage? "text-white cursor-not-allowed":""}`}  onClick={previousPage}/>
                            <span>{`Page ${pageIndex+1} of ${pageCount}`}</span>
                            <FaStepForward className={` cursor-pointer ${!canNextPage? "cursor-not-allowed text-white":""}`} onClick={nextPage}/>
                            {/* <button disabled={!canNextPage} onClick={nextPage}>Next</button> */}

                        </div>
                      )
                 }
          </div>
    }
}

export default Table