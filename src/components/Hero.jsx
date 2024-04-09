 import React from 'react'
 import beachvid from '../assets/beachVid.mp4'
import {AiOutlineSearch} from 'react-icons/ai';
import flag from '../assets/flag.jpg';
 const Hero = () => {
   return (
     <div className='w-full h-screen relative'>
             <div className='absolute w-full h-full top-0 left-0' style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundBlendMode: 'darken', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}> </div>

             <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'> </div>
          
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center  text-white p-4'>
            <h1>Welocome to </h1>
            <h2 className='py-4'>Online Penalty Pay</h2>
         
          </div>
            
     </div>
   );
 };
 
 export default Hero