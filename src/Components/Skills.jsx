import React from 'react'
import figma from '../assets/figma.png'
import abobeill from '../assets/Adobe-ill.png';
import abodeXd from '../assets/Adobe-xd.png'

const Skills = () => {
  return (
 <div className='border py-5'>
    <div className='ml-[5%] '>
       <div className="flex gap-24">
      <div>
        <h3 className="text-lg  text-[#898988]">Skills Required</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2  border border-[#cbcfd6] rounded p-1 w-3/5"
          style={{
            boxShadow: 'inset 0px 8px 8px rgba(0, 0, 0, 0.07)',
               }}
          >
            <img
            src={figma}
              alt="Figma logo"
              className="w-5 h-5"
            />
            <p className='text-[#3c3c3d] '>Figma</p>
          </div>
          <div className="flex items-center gap-2 border border-[#cbcfd6] rounded p-2 "
            style={{
              boxShadow: 'inset 0px 8px 8px rgba(0, 0, 0, 0.07)',
                 }}>
            <img
              src={abobeill}
              alt="Adobe Illustrator logo"
              className="w-5 h-5"
            />
            <p className='text-[#3c3c3d]'>Adobe Illustrator</p>
          </div>
          <div className="flex items-center gap-2 border border-[#cbcfd6] rounded p-1 w-4/5"
            style={{
              boxShadow: 'inset 0px 8px 8px rgba(0, 0, 0, 0.07)',
                 }}>
            <img
              src={abodeXd}
              alt="Adobe XD logo"
              className="w-5 h-5"
            />
            <p className='text-[#3c3c3d]'>Adobe XD</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg  text-[#898988]">Preferred Language</h3>
        <div className="flex items-center gap-2">
          <p className="text-lg text-[#3c3c3d] ">English</p>
          
        </div>
      </div>
      <div>
        <h3 className="text-lg  text-[#898988]">Type</h3>
        <p className="text-lg text-[#3c3c3d]">Full time</p>
      </div>
      <div>
        <h3 className="text-lg  text-[#898988]">Years of Experience</h3>
        <p className="text-lg text-[#3c3c3d]">3+ Years of Experience</p>
      </div>
    </div>
  
    </div>
    </div>
  )
}

export default Skills
