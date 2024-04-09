import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import Selected from './Selected'
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <Selected bg={BoraBora} text=''/>
        <Selected bg={BoraBora2} text=''/>
        <Selected bg={maldives} text=''/>

        
    </div>
  )
}

export default Selects