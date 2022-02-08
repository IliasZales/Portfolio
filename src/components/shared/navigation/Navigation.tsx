import React, { ClassType, useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import NavItem from '../../../models/NavItem';



interface navigationProps {
  pageName: String;
  //wide: String;
  color: String;
  absolutePos?: String;


}



const Navigation = (props: navigationProps) => {
  const { pageName } = props
  // const { wide } = props;



  return (

    <div className={`rounded-r-xl  navPosi md:h-64 md:top-40 sm:h-24 sm:top-20 ${props.color}  justify-center w-full sm:w-1/2 ${props.absolutePos}`} >

      <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pt-4 pl-5 sm:pl-10"><Link to="/">Home</Link></h3>
      <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/timeline">Timeline</Link></h3>
      <h3 className="text-white md:text-2xl sm:text-xl  text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/projects">Projects</Link></h3>


    </div>



  )
}

export default Navigation