import React, { Suspense } from 'react'

import HeroData from './HeroData'
import { GridLoader } from 'react-spinners'

const DataPromise = fetch("/Data.json").then(res => res.json())
export default function Program() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-center my-10'> Friends to keep close in your life</h1>
<p className='text-center text-gray-400'>Your personal shelf  of meaningful connection Browse tend and nurture the reletionship  that matter most.</p>
     <div className='flex justify-center gap-3 py-5'>
      <button className='btn '>+ Add a Friend</button>

     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-3  w-full mx-auto justify-items-center'>
          <div className='w-75 h-50 bg-green-500 flex justify-center items-center  rounded-xl '>
            <div>
                <p className='font-bold text-center'>18</p>
          
               <h1 className='text-center'>On Track</h1>
            </div>
            
          </div>
          <div className='w-75 h-50 bg-green-500 flex justify-center items-center rounded-xl'>
            <div>
                <p className='font-bold text-center'>11</p>
          
               <h1 className='text-center'>Nees Attention</h1>
            </div>
          </div>
          <div className='w-75 h-50 bg-green-500 flex justify-center items-center rounded-xl'>
             <div>
                 <p className='font-bold text-center'>9</p>
          
               <h1 className='text-center'>Interaction this month</h1>
            </div>
          </div>
          <div className='w-75 h-50 bg-green-500 flex justify-center items-center rounded-xl'>
             <div>
                    <p className='font-bold text-center'>10</p>
          
               <h1 className='text-center'>Total Friends</h1>
            </div>
          </div>

     </div>
      
       <Suspense fallback={ <GridLoader className='text-red-500'/>}>
             <HeroData DataPromise = {DataPromise}></HeroData>
       </Suspense>
   





    </div>
  )
}
