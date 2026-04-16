
import { Link } from 'react-router-dom'

export default function CardData({Prom}) {
    const {picture,name,status,tags } = Prom
    // console.log(hero)
  
  return (
    
      <div className="card bg-base-100 w-75 shadow-sm border-2 border-rounded">
       
  <figure className="px-10 pt-10">
    <img
      src={picture}
      alt="Shoes"
      className="rounded-full w-60 h-60" />
  </figure>
  <div className="card-body ">
    <h2 className=" text-center text-2xl font-bold">{name}</h2>
      <p className='text-center text-gray-400'>62 day ago</p>
      <p className='text-center text-green-800'>{tags}</p>
    <div className=" flex justify-between">
        
         <Link to={`/chemistry/${Prom.id}`}>
               <button className={`btn btn-primary text-red-300 rounded-4xl relative mx-22" ${ status === 'active'? "bg-yellow-400 " : "bg-red-400"}`}>{status}
               </button>
         </Link>
     
    </div>
  </div>
 
</div>
  )
}
