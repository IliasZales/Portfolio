import React, { ClassType, useState } from 'react'
import { Link } from 'gatsby'
import '../burgerMenue/burgerMenue.scss'
import { slide as Menu } from 'react-burger-menu'

interface IBurgerMenu {

}
const BurgerMenu = (props: IBurgerMenu) => {



    return (

        <div className={`  `} >
            <Menu>
                <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pt-4 pl-5 sm:pl-10"><Link to="/">Home</Link></h3>
                <h3 className="text-white md:text-2xl sm:text-xl text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/timeline">Timeline</Link></h3>
                <h3 className="text-white md:text-2xl sm:text-xl  text-left align-middle pb-6 pl-5 sm:pl-10"><Link to="/projects">Projects</Link></h3>
            </Menu>

        </div>



    )
}

export default BurgerMenu;