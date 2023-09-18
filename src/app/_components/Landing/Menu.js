import React, { useEffect, useState } from "react";
import Link from "next/link";
import Comp from './Comp'


export default function Menu() {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);
  

  function handleClick(e) {
    if (data.length === 3 && !data.includes(e.target.textContent)) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else if (data.includes(e.target.textContent)) {
      //data is included and we want to change our choices
      e.target.style.transform = "scale(1)";
      e.target.style.color = "white";
      setData((prevData) =>
        prevData.filter((item) => item !== e.target.textContent)
      );
    } else {
      e.target.style.color = "green";
      e.target.style.transform = "scale(1.3)";
      setData((prevData) => [...prevData, e.target.textContent]);
    }

   
      
    // if(data.length >= 3  ){

    //   setAlert(true)
    //   setTimeout(()=> {
    //     setAlert(false)
    //   },2000)
    //   return
    // }
    //   if(data.includes( e.target.value) && data?.length <= 4) {
    //     console.log("filtereed is going to run")
    //    const filtered = data.filter(val => e.target.value !== val)
    //    console.log("filtereed is going to run" , filtered)
    //    setData(filtered)
    //    return
    //   }
      
      
    //   if(!data?.includes(e.target.value) && data?.length <= 3){
    //     setData(
    //       data =>{

    //         return [
    //           ...data,
    //            e.target.value
    //         ]
    //       }
    //     )
    //   }
   

    
  }
 


  // useEffect(() => {
  //   if (data.length === 3) setShowNext(true);
  //   else setShowNext(false);
  // }, [data.length]);
  console.log(data);




  return (<>
    <div className="bg-black flex flex-col justify-center items-center h-screen text-white">
      <p className={`text-red-400 text-2xl pb-8 ${alert ? "block" : "hidden"}`}>You can choose only 3 items</p>

      <p className="">what would you like to add in your pizza ?</p>
      <div className="flex flex-col gap-4 items-center mt-6 mb-10 ">
        <button className={``} value={"Bread"} onClick={handleClick}>Bread</button>
        <button value={"Onion"} onClick={handleClick}>Onion</button>
        <button value={"Capsicum"} onClick={handleClick}>Capsicum</button>
        <button value={"Cheese"} onClick={handleClick}>Cheese</button>
        <button value={"Garlic"} onClick={handleClick}>Garlic</button>
      </div>
        <a
          href="#comp"
          className={` p-2 bg-white text-lime-600 ${data.length===3 ? "block" : "hidden"} rounded-2xl text-2xl`}
        >
          Next
        </a>

    </div>
  <Comp data={data}/>
  </>
  );
}
