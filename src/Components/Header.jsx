import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { PiBellSimple } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";

import logo from '../assets/Asstlassian-logo.png'
const Header = () => {

  return (
    <div className='flex justify-between mx-8 my-5 text-[#b1b0b1]'>

      <div className='text-[#dd4a2c] font-extrabold bg-[#e7e7e7] p-3 m-2'>
        Logo 
      </div>
 
     <div className='flex'>
        
      <div className='flex bg-[#dd4a2c] text-white rounded-full px-3 m-2 items-center  text-xl '
       style={{
        boxShadow: ' 0px 10px 10px rgba(0, 0, 0, 0.25)',
          }}>
            <FiBriefcase className='mr-3 '/>
                 Jobs
       </div>

      <div className='flex border  mx-2 items-center gap-12 px-8 py-5'
       style={{
        boxShadow: 'inset 0px 10px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '50px'   }}
      >
       
        <div className='flex items-center text-xl '>

         <div className='relative '>
        <LuMessageSquare className='mr-1'/>
         <svg viewBox="0 0 100 100" className='absolute top-[-20px] right-[-16px]  ' >
             <circle cx="50" cy="50" r="10" fill='#dd4a2c'/>
         </svg>
         </div>
            Messages

            </div>
        <div className='flex items-center text-xl'>
        <PiHandCoins className='mr-1' />
            Payments
            </div>

         <div className='flex items-center text-xl'>
        < FiUsers className='mr-1' />
            Application
            </div>


      </div>
      </div>

      <div className='flex items-center gap-3'>
        <div className='flex items-center relative'>
             <PiBellSimple className='text-2xl text-black'/>
             <svg viewBox="0 0 100 100" className='absolute top-[-18px] right-[-18px]  ' >
             <circle cx="50" cy="50" r="10" fill='#dd4a2c'/>
             </svg>
        </div>
        
        <div ><img src={logo}  className='w-7 rounded-full'/></div>
        <div><IoChevronDown className='text-xl text-black'/></div>
      </div>
    </div>
  )
}


export default Header
