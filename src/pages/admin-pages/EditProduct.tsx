import { ChangeEvent, FormEvent, useState } from "react"

const p1 = 'https://m.media-amazon.com/images/I/61jBnY6paeL.__AC_SX300_SY300_QL70_FMwebp_.jpg';
const EditProduct = () => {

  const [name,setName]=useState<string>("Headset");
  const [price, setPrice]=useState<number>( 20);
  const [stock, setStock]=useState<number>(10 );
  const [photo, setPhoto]=useState<string>(p1);
  const [description, setDescription]=useState<string>();

  const [nameUpdate,setNameUpdate]=useState<string>("Headset");
  const [priceUpdate, setPriceUpdate]=useState<number>( 20);
  const [stockUpdate, setStockUpdate]=useState<number>(10 );
  const [photoUpdate, setPhotoUpdate]=useState<string>(p1);
  // const [descriptionUpdate, setDescriptionUpdate]=useState<string>();


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

  const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
       setNameUpdate(name);
      //  setDescriptionUpdate(description);
       setPhotoUpdate(photo);
       setPriceUpdate(price);
       setStockUpdate(stock);
  }
  return (
    <main className=" w-full p-5 ">
      <h2 className=" font-bold text-2xl my-5 text-center">Edit Product</h2>
      <div className="flex flex-col md:flex-row  gap-5 justify-center">
      <section className=" flex flex-col gap-5 p-5 max-w-80 shadow-md rounded-md bg-white mx-auto md:mx-0">
       
        <strong>ID : aasdfskdjflskjf</strong>
        <img src={photoUpdate} alt="product" />
        <p>Stock : {stockUpdate>0 ? 
        <span className=" text-blue-700">Available</span> : <span className=" text-red-700">Unavailable</span>
      }</p>
      <h2>Name : {nameUpdate}</h2>
      <p>Price : ${priceUpdate}</p>
   <p>Available : {stockUpdate}</p>
      </section>
      <article className=" w-full shadow-md rounded-md max-w-2xl">
        <form onSubmit={handleSubmit} action="" className="  bg-white p-5 flex flex-col w-full gap-5 justify-center">
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
          <button className=" bg-violet-700 text-white p-2 rounded-md" type="submit">Update</button>

        </form>
      </article>
      </div>
    </main>

  )
}

export default EditProduct