import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import NavItem from '../../../models/NavItem';


interface navigationProps {
    pageName: String;
   
    
}

const Navigation = (props : navigationProps) => {
    const {pageName} = props
    

  return(
   
     <div className='navPosi w-1/2 h-48 top-60 bg-secondary overflow-hidden justify-center' >
       <h3 className="text-white text-2xl text-left align-middle pb-6 pt-4 pl-10">Timeline</h3>
       <h3 className="text-white text-2xl text-left align-middle pb-6 pl-10">Projects</h3> 
       <h3 className="text-white text-2xl text-left align-middle pl-10">Experience</h3> 

     </div>
     
      
   
  )
}

export default Navigation