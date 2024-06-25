import React from 'react'
import { CiTrash } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";

import user from '../assets/user.png'
const Jobview = () => {
  return (
    <div className="flex flex-col  p-4 bg-white rounded-md shadow-md border  text-[#4e4e4f]">
        <div className='flex items-center justify-center gap-8'>
            <button className='flex border border-[#e16850] text-[#e16850] gap-2 items-center rounded p-2 '>  <CiTrash className='text-lg'/><h2> Delete job</h2></button>
            <button className='flex border gap-4 items-center text-white bg-[#dd4a2c] rounded p-2 '>  <MdOutlineEdit className='text-lg'/><h2>Edit job</h2> </button>
        </div>
     <div className="flex justify-between items-center mt-4 ">
        <div className="flex items-center gap-2">
        <LuUsers className='text-lg'/>
          <div className="text-gray-700 font-medium">Applicants</div>
        </div>
        <div className="text-gray-700">400</div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
        <TbUserCheck className='text-lg'/>
          <div className="text-gray-700 font-medium">Matches</div>
        </div>
        <div className="text-gray-700">100</div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
         <LuMessageSquare lassName='text-lg'/> 
          <div className="text-gray-700 font-medium">Messages</div>
        </div>
        <div className="text-gray-700">147</div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
        <MdOutlineRemoveRedEye lassName='text-lg'/>
          <div className="text-gray-700 font-medium ">
          
            Views</div>
        </div>
        <div className="text-gray-700">800</div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mt-4">
        <p className="text-gray-700 font-medium">
          "A quote from a Atlassian."
        </p>
        <div className="flex items-center mt-2">
          <img
            src={user}
            alt="Profile Picture"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-700 font-medium">Name</p>
            <p className="text-gray-500 text-sm">Description</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Jobview
