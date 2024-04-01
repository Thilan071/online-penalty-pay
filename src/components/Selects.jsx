import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'
import Selected from './Selected'
import maldives3 from '../assets/maldives3.jpg'
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <Selected bg={BoraBora} text='Maldives'/>
        <Selected bg={BoraBora2} text='Maldives'/>
        <Selected bg={maldives} text='Antigu'/>
        <Selected bg={maldives2} text='Srilanka'/>
        <Selected bg={maldives3} text='Jameica'/>
        <Selected bg={keywest} text='Japan'/>

        
    </div>
  )
}

export default Selects