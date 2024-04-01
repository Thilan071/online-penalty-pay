import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'
const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
       
        <p className='py-2'>On the Caribbens Best Beaches</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-5 gap-2 md:gap-4'>
           <img className='w-full object-cover h-full col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="" />
           <img className='w-full object-cover h-full' src={BoraBora2} alt="" />
           <img className='w-full object-cover h-full' src={maldives} alt="" />
           <img className='w-full object-cover h-full' src={maldives2} alt="" />
           <img className='w-full object-cover h-full' src={keywest} alt="" />
                

    </div>
    </div>
  )
}

export default Destination