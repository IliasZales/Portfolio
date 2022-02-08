import React, { useState } from 'react'
import { Link } from 'gatsby'
import Image from '../util/image/image'
import './picContainer.scss'

import '../../constants/style/variables.scss'


const PicConatainer = () => {



  return (

    <div className=' pic-background w-full h-full flex flex-row justify-center items-center object-center'>


      <div className='  w-full  h-screen    z-10 lg:overflow-hidden' >

        <div className='w-full  hoeheklein '>
          <div className='text-center sm:text-6xl text-4xl'><h1><span className='text-secondary '>Port</span><span className='text-primary'>folio</span></h1></div>
        </div>
        <div className='w-full border-white border-4 hoehebildcontainer items-center rounded-t-xl    '>
          <div className='text-center text-4xl tracking-wide text-white whitespace-normal '>Ilias Zales</div>
          <Image imageName='picfarbe_ili.png' maxWidth={650} className=' bildanpassung object-bottom  '
          />


        </div>

        <div className=' social-background justify-center flex flex-col sm:flex-row  w-full  text-white  border-4 border-gray-300 rounded-b-xl   sm:mb-20  ' >
          <h3 className=" text-lg lg:text-xl linked  text-left align-middle pl-10"><a href="https://de.linkedin.com/in/ilias-zales-2a446a200" >LinkedIn</a></h3>

          <h3 className="xing  text-lg lg:text-xl text-left align-middle pb-2 pl-10"><a href="https://www.xing.com/profile/Ilias_Zales">Xing</a></h3>
          <h3 className=" text-lg lg:text-xl text-white  text-left align-middle pb-2  pl-10"><a href="https://github.com/IliasZales">Github</a></h3>
          <h3 className=" text-lg lg:text-xl insta  text-left align-middle pl-10"><a href="https://instagram.com/ili_aas?utm_medium=copy_link">Instagram</a></h3>
        </div>

        <div className="block sm:hidden  text-sm mt-4 lg:text-xl  flex  pl-4 pr-4 pb-4  text-white " >  Ich bin ein Full Stack Entwickler aus Hannover mit folgenden Technologien habe ich schon gearbeitet </div>
      </div>


    </div>




  )
}

export default PicConatainer 