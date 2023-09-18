'use client'
import React, { useRef, useState } from "react";

export default function Detail(){
  const [pizzaData,setPizzaData]=useState([])
  // const [alert,setAlert]=useState('')
  // const [showOrder,setShowOrder]=useState(false)
  
  const btnRef=useRef(null) 

    function handleClick(e){
      e.target.style.color='green';
      e.target.style.transform='scale(1.3)';
setPizzaData(prevData=>{


 return [e.target.textContent]
})
    }
   console.log(btnRef)
return ( <section className="bg-black flex flex-col capitalize justify-center items-center h-screen text-white">
     <p>{alert}</p>
      <p>which pizza you are looking for ?</p>
      <div className="flex flex-col gap-4 items-center mt-6 mb-10 ">
        <button ref={btnRef} onClick={handleClick}>paneer pizza</button>
        <button onClick={handleClick}>marghareeta</button>
        {/* <button onClick={handleClick}>chicken pizza</button>
        <button onClick={handleClick}>plain pizza</button> */}
      </div>
      <p>Select the size for your pizza</p>
      <button>small</button>
      <button>regular</button>
      <button>large</button>
  </section>)
}