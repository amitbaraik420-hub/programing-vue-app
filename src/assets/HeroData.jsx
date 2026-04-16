import React, { use } from 'react'
import CardData from './CardData'
import { Link } from 'react-router-dom'

export default function HeroData({DataPromise}) {
    const PromiseData = use(DataPromise)
    // console.log(PromiseData)
  return (
    <>
   
    <h1 className='font-bold text-center p-8 relative '>Your Friends</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  with-full mx-auto justify-items-center'>
      
         {
            PromiseData.map((Prom) => (
            <Link key={Prom.id} to={`/chemistry/${Prom.id}`}>
                        <CardData  Prom={Prom}></CardData>
            </Link>
           ))
         }   
       

    </div>

    
    </>
  )
}
