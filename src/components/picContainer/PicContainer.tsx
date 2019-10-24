import React, { useState } from 'react'
import { Link } from 'gatsby'

import Image from '../util/image/image'




const PicConatainer = () => {
    
    

  return(
   
     <div className=' w-full  h-full flex flex-row justify-center items-center object-center'>

     <div className=' w-1/2 h-full invisible   overflow-hidden' >
     
         </div>
     <div className=' w-full h-screen   border-white border-2   z-10 overflow-hidden' >
     <Image imageName='pic.png' maxWidth={500} className=' bottom-0 relative inset-x-auto object-center  '
        />
         </div>
         <div className=' w-1/2 h-full   invisible  z-10 overflow-hidden' >
     
        
         </div>

     </div>
     
     
      
   
  )
}

export default PicConatainer 