import React, { ClassType, useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import NavItem from '../../../models/NavItem';



interface navigationProps {
  mobilewidth?: String;
  smallwidth: String;
  pageName: String;
  //wide: String;
  color: String;
  absolutePos?: String;


}



const Navigation = (props: navigationProps) => {
  const { pageName } = props
  // const { wide } = props;



  return (

    <div className={`rounded-r-xl   navPosi md:h-48 md:top-40 sm:h-24 sm:top-20 border-t-0  border-l-0 border-4 border-gray-50 border-opacity-60 ${props.color} ${props.mobilewidth}   justify-center ${props.smallwidth}    ${props.absolutePos}`} >

      <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pt-4 pl-5 sm:pl-10"><Link to="/">Home</Link></h3>
      <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/timeline">Timeline</Link></h3>
      <h3 className="text-white md:text-2xl sm:text-xl  text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/projects">Projects</Link></h3>


    </div>



  )
}

export default Navigation