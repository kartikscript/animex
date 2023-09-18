"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero'
import SectionA from './SectionA';
import Menu from './Menu';
import Comp from './Comp';


export default function Home(){
 
  return(<main className=' capitalize bg-cover font-play text-white h-screen' style={{backgroundImage:`url(${'/images/main.jpg'})`}}>
  <div className='h-screen overflow-hidden'>
  <Navbar/>
  <Hero/>
  </div>
  <SectionA/>
  <Menu/>
  </main>)
}