import React from 'react';
// import { motion } from 'framer-motion';

export default function Hero(){




  

  return(
    <section className=' mt-10 px-10 flex justify-between items-center'>
      <div className='py-8 w-4/4'>
      <p className='text-5xl mb-8 leading-tight'>animex is a flexible web<br/> family for interfaces, diagrams, presentations — whatever, really.</p>
     <p className='text-xl'> This makes the UI look more responsive and secures users from leaving a slow internet interaction.</p>
</div>
<div className='grid grid-rows-3 grid-cols-3 gap-4 ' >
  <div
   className=' p-4 rounded-2xl bg-black/80 col-span-2 skew-y-12 ' 
   initial={{x:100,opacity:0}}
   animate={{x:0,opacity:1}}
   transition={{delay:0.2}}
   >
    <img src='/icons/hero1.svg'/>
    <p>After installing Tailwind CSS and <br/>adding the global styles, you can use Tailwind&apos;s utility classes in your application.</p>
  </div>
   <div 
    className='p-4 rounded-2xl bg-black/80 col-start-2 col-end-4 skew-x-12'
    initial={{x:100,opacity:0}}
   animate={{x:0,opacity:1}}
   transition={{delay:0.3}}
    >
    <img src='/icons/hero2.svg'/>
    <p>After installing Tailwind CSS and<br/> adding the global styles, you can use Tailwind&apos;s utility classes in your application.</p>
  </div> 
  <div 
   className=' p-4 rounded-2xl bg-black/80 col-span-2 skew-yN-12 '
   initial={{x:100,opacity:0,}}
   animate={{x:0,opacity:1}}
   transition={{delay:0.3}}
   >
    <img src='/icons/hero3.svg'/>
    <p>After installing Tailwind CSS and <br/>adding the global styles, you can use Tailwind&apos;s utility classes in your application.</p>
  </div>
</div>
    </section>
  )
}