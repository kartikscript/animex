import React, { useEffect, useRef, useState } from "react";

export default function SectionA(){
  // const [isClass,setIsClass]=useState(false)

  return(<>
    <section className="h-screen  bg-gradient-radial   from-blue-400 to-white transition-all duration-200 flex justify-between gap-3 p-16 items-center border-t-4 border-black" >
<div  className="bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600 hover:from-blue-950  hover:to-white/70 transition-all duration-1000  ease-in rounded-xl w-4/12 h-3/6 skew-x-6  ">
  <img src="images/chatting.png"  className="h-6/6 -translate-y-20"/>
</div>
<div>

<p className="text-8xl pb-10 text-blue-200">faith</p>
<p className="text-4xl "> After installing Tailwind CSS and<br/> adding the global styles, you can use Tailwind&apos;s<br/> utility classes in your application.</p>
</div>

    </section>
    <section className="h-screen bg-gradient-radial from-blue-400 to-white transition-all duration-200 flex justify-between gap-3 p-12 items-center" >

<div>

<p className="text-8xl pb-10 text-blue-400">faith</p>
<p className="text-4xl "> After installing Tailwind CSS and<br/> adding the global styles, you can use Tailwind&apos;s<br/> utility classes in your application.</p>
</div>
<div className="bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600 hover:from-blue-950  hover:to-white/70 transition-all duration-1000  ease-in rounded-xl w-4/12 h-3/6 skew-y-6  ">
  <img src="images/laptop.png"  className="h-6/6 -translate-y-20 -translate-x-20"/>
</div>

    </section>  
    <section className="h-screen bg-gradient-radial from-blue-400 to-white transition-all duration-200 flex justify-between gap-3 p-12 items-center" >
<div   className="bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600 hover:from-blue-950  hover:to-white/70 transition-all duration-1000  ease-in rounded-xl w-4/12 h-3/6 skew-x-6  ">
  <img  src="images/listening.png"  className="h-max -translate-y-36"/>
</div>
<div>

<p className="text-8xl pb-10 text-blue-200">faith</p>
<p className="text-4xl "> After installing Tailwind CSS and<br/> adding the global styles, you can use Tailwind&apos;s<br/> utility classes in your application.</p>
</div>

    </section>
  </>)

}