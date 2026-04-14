import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
export default function Footer() {
  return (
    <div className='w-full h-[250px] bg-green-800 to-black my-4'>
      <div className=''>
        <p className='text-center font-bold text-3xl p-4'>KeenKeeper</p>
           <p className='text-center text-gray-400'>Your personal sheif of meaningful connection,Browser,tend and nurture the reletionship that matter most</p>
           <p className='font-bold text-center text-2xl p-3'>Social Links</p>
           <div className='flex justify-center  gap-2'>
            <div className='w-8 h-8 rounded-full flex justify-center items-center border-1'>

              <FaInstagram></FaInstagram>
            </div>
            <div className='w-8 h-8 rounded-full  flex justify-center items-center border-1'>
                <FaFacebook></FaFacebook>
            </div>
            <div className='w-8 h-8 rounded-full border-1 flex justify-center items-center'>
                  <FaXTwitter></FaXTwitter>
            </div>
           </div>
      </div>

      <div className='flex justify-between w-[1200px] mx-auto'>
        <p className='text-gray-400'>2026 KeenKeeper.All rights reserved.</p>
        <div className='grid grid-rows-1 grid-cols-3 gap-3 p-4'>
            <div className='text-gray-400'>Privacy</div>
            <div className='text-gray-400'>Terms of Service</div>
            <div className='text-gray-400'>Cookies</div>
        </div>
      </div>
    </div>
  )
}
