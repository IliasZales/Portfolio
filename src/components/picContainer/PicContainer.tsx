import React, { useState } from 'react'
import { Link } from 'gatsby'
import Image from '../util/image/image'
import './picContainer.scss'

import '../../constants/style/variables.scss'


const PicConatainer = () => {
    
    

  return(
   
     <div className=' w-full  h-full flex flex-row justify-center items-center object-center'>

     <div className=' w-1/2 h-full invisible   overflow-hidden' >
       
     
         </div>
     <div className=' w-full h-screen    z-10 overflow-hidden' >
   
      <div className='w-full  hoeheklein '>
      <div className='text-center text-6xl'><h1><span className='text-secondary'>Port</span><span className='text-primary'>folio</span></h1></div>
      </div>
       <div className='w-full border-white border-4 hoehebildcontainer items-center   '> 
          <div className='text-center text-4xl tracking-wide text-white whitespace-normal '>Ilias Zales</div>  
         <Image imageName='picfarbe_ili.png' maxWidth={850} className=' bildanpassung bject-bottom '
        />

       </div>
    

         </div>
         <div className=' w-1/2 h-full   invisible  z-10 overflow-hidden' >
       
        
         </div>

     </div>
     
     
      
   
  )
}

export default PicConatainer 