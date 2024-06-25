import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import Jobview from './Jobview';
const Position = () => {
  return (

<div className='border flex '>

    <div className='ml-[5%] my-6  '>

    <div className='flex gap-7 items-center'>
        <div className='text-4xl font-bold text-[#3c3c3d]'>Senior Product Designer</div>
        <div> <li className=' text-[#898988]'>posted 2 days ago</li> </div>
        <div className='bg-green-100 rounded-full px-4 py-2 text-green-800 font-bold text-sm flex items-center'> 
           <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
         Open
        </div>
     </div>

     <div className='flex text-xl text-[#898988] gap-3 mt-5'>

      <div className='flex items-center '>
        <IoLocationOutline />
        Delaware, USA
      </div>

      <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-2 h-2 bg-gray-300 rounded-full">
       
      </div>
        <TbCoins className="w-6 h-6 text-gray-600" />
      <div className="text-lg ">$300k-$400k</div>
    </div>

     </div>

    </div>

    <div className='absolute  h-screen w-1/5 right-0'>
      <Jobview  />
    </div>
    </div>
  )
}

export default Position
