
import { useLoaderData, useParams } from 'react-router-dom'
import { FaBeer } from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdVideoCall } from 'react-icons/md';
import {FaTrashAlt} from "react-icons/fa"
import { FaArchive } from 'react-icons/fa';
import { MdSnooze } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Chemistry() {
     const {id} = useParams();
     const Data = useLoaderData();
 
    const UseData = Data.find(( data) => String(data.id) === String(id));
    console.log(UseData)
       const handleActivity = (type) => {
    const newEntry = {
        name: UseData?.name || "Unknown",
        action: type,
        date: new Date().toLocaleDateString('en-GB', { 
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' 
        })
    };
    const oldData = JSON.parse(localStorage.getItem('my_timeline') || '[]');
    localStorage.setItem('my_timeline', JSON.stringify([newEntry, ...oldData]));
};
  return (
    <div className='flex gap-3 py-10 contaner'>
    <div>
        
        <div  className='w-70 h-90 mx-[40px] p-4 border-1 rounded-md'>
          <div className='flex justify-center'>
                <img className='w-40 h-40 rounded-full ' src={UseData?.picture } alt='profile'/>
          </div>
           
           <h1 className='text-center font-bold'>{UseData?.name }</h1>
                  <button className="btn btn-xs text-center text-green-600 mx-[90px]">{UseData?.status}</button>
                  <br></br>
            
           <button className="btn btn-xs  mx-[92px]">Femail</button>
           <p className='text-gray-400 text-center'>{UseData?.bio}</p>
           <p className='text-center'>{UseData?.email}</p>
        </div>
        <div className='w-70 h-12 mx-[40px] m-3 text-center border-1 rounded-md flex justify-center items-center '>
          <MdSnooze></MdSnooze>
          <p className='p-2'>Snooze 2 Weeks</p>
        </div>
        <div className='w-70 h-12 mx-[40px] m-3 text-center border-1 rounded-md flex justify-center items-center '>
          <FaArchive></FaArchive>
          <p className='p-2'>Archive</p>
        </div>
        <div className='w-70 h-12 mx-[40px] m-3 text-center border-1 rounded-md flex justify-center items-center '>
          <FaTrashAlt ></FaTrashAlt>
          <p className='p-2'>Delete</p>
          </div>
       </div >


         <div className=''>
                <div className='grid grid-cols-3 grid-rows-3 gap-3 '>
                  <div className='border-1 p-3 rounded-md'>
                    <p>{UseData?.days_since_contac}</p>
                    <p>Day Since Contact</p>
                  </div>
                  <div className='border-1 p-3 rounded-md'>
                    <p>{UseData?.goal}</p>
                    <p>Goal(Days)</p>
                  </div>
                  <div className='border-1 p-3 rounded-md'>
                    <p>{UseData?.next_due_date}</p>
                    <p>Next-Due</p>
                  </div>
                  <div className='border-1 col-span-3 flex justify-between items-center p-3'>

                    <p>Relationship Goal <br></br> connect every {UseData?.goal}</p>
                     <button className='btn '>Edit</button>
                  </div>
                  <div  className='border-1 col-span-3'>
                    <p className='font-bold p-2'>Quick Check-in</p>
                      <Link to='/timeline' className='grid grid-cols-3 grid-rows-1 flex justify-center items-center gap-2 '>
                         <div className='p-4 btn '>
                           <FaPhoneAlt className='mx-1'></FaPhoneAlt>
                          <p onClick={() => handleActivity('call')}>Call</p>
                         </div>
                        <div  className='p-4 btn '>
                              <FaBeer className='mx-2' />
                          <p onClick={() => handleActivity('Text')}>Text</p>
                         </div>
                         <div  className='p-4 btn '>
                          <MdVideoCall className='mx-3'></MdVideoCall>
                          <p onClick={() => handleActivity("Video")}>Video</p>
                         </div>
                      </Link>
                  </div>
                </div>


         </div>








        </div>

  )
}
