import { ChangeEvent, useState } from "react"

const AddProduct = () => {

  const [name,setName]=useState<string>("");
  const [price, setPrice]=useState<number>( );
  const [stock, setStock]=useState<number>( );
  const [photo, setPhoto]=useState<string>();
  const [description, setDescription]=useState<string>();

  const ImageHandler=(e: ChangeEvent<HTMLInputElement>)=>{
    const file:File = e.target.files?.[0]!;

    const reader: FileReader = new FileReader()
      if(file){
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
          if(typeof reader.result==="string"){
            setPhoto(reader.result);
          }
        }
      }
    
  }
  return (
    <main className=" w-full p-5">
      <h2 className=" font-bold text-2xl my-5 text-center">Add Product</h2>
      <article className=" shadow-md rounded-md max-w-2xl mx-auto">
        <form action="" className="  bg-white p-5 flex flex-col w-full gap-5 justify-center">
          <div className=" flex flex-col sm:flex-row  gap-5">
          <div className=" flex flex-col gap-2 w-full">
            <label className=" font-semibold"  htmlFor="name">Name</label>
            <input className=" p-2 border-[1px] border-sky-300 bg-sky-50 outline-sky-500 rounded-md max-w-xl" placeholder="Name" required id="name"  type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <label className=" font-semibold" htmlFor="price">Price</label>
            <input className=" p-2 border-[1px] border-sky-300 bg-sky-50 outline-sky-500 rounded-md max-w-xl" placeholder="Price" required id="price"  type="text" value={price} onChange={(e)=>setPrice(Number(e.target.value))} />
          </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-5">
          <div className=" flex flex-col gap-2 w-full">
            <label className=" font-semibold" htmlFor="stock">Stock</label>
            <input className=" p-2 border-[1px] border-sky-300 bg-sky-50 outline-sky-500 rounded-md max-w-xl" placeholder="Stock" required id="stock"  type="text" value={stock} onChange={(e)=>setStock(Number(e.target.value))} />
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <label className=" font-semibold" htmlFor="photo">Photo</label>
            <input className=" max-w-64"  required id="photo"  type="file" onChange={ImageHandler} />
          </div>
          </div>
          {
            photo && <img className=" w-16" src={photo} alt="New Img" />
          }
          <div className=" flex flex-col gap-2 w-full">
            <label className=" font-semibold" htmlFor="description">Description</label>
           
            <textarea rows={5} className=" p-2 border-[1px] border-sky-300 bg-sky-50 outline-sky-500 rounded-md " placeholder="Description" required id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <button className=" bg-violet-700 text-white p-2 rounded-md" type="submit">Add</button>

        </form>
      </article>
    </main>
  )
}

export default AddProduct