import Cards from "./Cards"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
    const res =  await  axios.get("http://localhost:5000/book");
    
    setBook(res.data)
      }catch(err){
        console.log(err)      }
    }
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500"> Here ! :)</span></h1>
            <p className="mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur voluptatem nobis recusandae quidem optio mollitia voluptate. Sed, reprehenderit expedita culpa dolores natus voluptas in, non, facilis vitae suscipit officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quisquam quibusdam eius ut quam et eveniet, optio aut unde fugiat iure incidunt autem repudiandae? Eius autem quia quos itaque repellendus.
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
          }
        </div>
    </div>
    </>
  )
}

export default Course
