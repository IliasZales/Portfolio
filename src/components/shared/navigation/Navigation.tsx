import React, { ClassType, useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import NavItem from '../../../models/NavItem';


interface navigationProps {
  pageName: String;
  wide: String;
  color: String;


}



const Navigation = (props: navigationProps) => {
  const { pageName } = props
  const { wide } = props;



  return (

    <div className={`navPosi h-64 top-40 ${props.color}  justify-center ${props.wide}`} >

      <h3 className="text-white text-2xl text-left align-middle pb-6 pt-4 pl-10"><Link to="/">Home</Link></h3>
      <h3 className="text-white text-2xl text-left align-middle pb-6  pl-10"><Link to="/timeline">Timeline</Link></h3>
      <h3 className="text-white text-2xl text-left align-middle pb-6 pl-10"><Link to="/projects">Projects</Link></h3>


    </div>



  )
}

export default Navigation