import React from 'react'
export default function Navbar(){
  return(
  <nav 
  // initial={{y:-100}}
  // animate={{y:0}}
  // transition={{type:'spring', stiffness:400}}
  className='flex justify-between items-center p-6 '>
    <div className='flex items-center gap-4'>
    <img src='/icons/next.svg' className='w-14'  />
    <h2 className='uppercase text-4xl'>animex</h2>
    </div>
    <div className='flex gap-16 text-xl'>
      <a
     
      href='#'>Pricing</a>
      <a
     
      href='#'>About</a>
      <a
     
      href='#'>Dashboard</a>
      <a
      
      href='#'>payments</a>
    </div>
    <div className='flex gap-6'>
   <button className='rounded-full p-2 bg-white '> <img src='/icons/search.svg' className='w-6' /></button>
   <button> <img src='/icons/bell.svg' className='w-6' /></button>
    </div>
  </nav>
  )
}