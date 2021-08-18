import React, { ClassType, useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import NavItem from '../../../models/NavItem';


interface navigationProps {
  pageName: String;
  wide: String;


}

const Navigation = (props: navigationProps) => {
  const { pageName } = props
  const { wide } = props;



  return (

    <div className={`navPosi h-48 top-40 bg-secondary  justify-center ${props.wide}`} >


      <h3 className="text-white text-2xl text-left align-middle pb-6 pt-4 pl-10"><Link to="/timeline">Timeline</Link></h3>
      <h3 className="text-white text-2xl text-left align-middle pb-6 pl-10">Projects</h3>
      <h3 className="text-white text-2xl text-left align-middle pl-10 font_r">Experience</h3>

    </div>



  )
}

export default Navigation