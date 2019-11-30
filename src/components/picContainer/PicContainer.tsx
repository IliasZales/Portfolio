import React, { useState } from 'react'
import { Link } from 'gatsby'
import Image from '../util/image/image'
import './picContainer.scss'
import iliGif from '../../images/pic.gif'



const PicConatainer = () => {
    
    

  return(
   
     <div className=' w-full  h-full flex flex-row justify-center items-center object-center'>

     <div className=' w-1/2 h-full invisible   overflow-hidden' >
     
         </div>
     <div className=' w-full h-screen    z-10 overflow-hidden' >
      <div className='w-full  hoeheklein '>

      </div>
       <div className='w-full border-white border-4 hoehe items-center  '> 
         <Image imageName='iliGif' maxWidth={500} className='bildanpassung items-center '
        />

       </div>
    

         </div>
         <div className=' w-1/2 h-full   invisible  z-10 overflow-hidden' >
     
        
         </div>

     </div>
     
     
      
   
  )
}

export default PicConatainer 