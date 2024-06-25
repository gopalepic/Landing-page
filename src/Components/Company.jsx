import React from 'react'
import image from '../assets/Asstlassian-logo.png'
const Company = () => {
  return (
    <div className='border '>
        <div className='ml-[5%]'>
        <div className="container mx-auto pt-12">
      <div className="flex items-center mb-4 gap-2">
        
          <img src={image} className='w-8 rounded-md'  />
        
        <h1 className="text-2xl  text-[#4e4e4f]">Atlassian</h1>
        <button
          className=" bg-[#e0eaf8] text-[#003788]  font-bold rounded-lg px-2 py-1"
          style={{
            boxShadow: ' 0px 10px 10px rgba(0, 0, 0, 0.25)',
              }}>
        Follow
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3  text-[#404040] w-3/5">
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Company size</h2>
          <p>1k - 2k Employees</p>
        </div>
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Type</h2>
          <p>Private</p>
        </div>
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Sector</h2>
          <p>Information Technology, Infrastructure</p>
        </div>
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Funding</h2>
          <p>Bootstrapped</p>
        </div>
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Founded In</h2>
          <p>2019</p>
        </div>
        <div>
          <h2 className=" text-[#6f6d6c] mb-2">Founded By</h2>
          <p>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
      <div className='my-10'>
        <h2 className='underline text-[#b1b0b1] '>Report this listing</h2>
      </div>
    </div>
        </div>
      
    </div>
  )
}

export default Company
