import React, { ReactNode, useRef, useState } from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../../shared/navigation/Navigation';
import NavItem from '../../../models/NavItem';
import "./layout.scss"
import { Collapse } from "../../collapse/Collapse"
import PicConatainer from '../../picContainer/PicContainer'
import BurgerMenue from "../../burgerMenue/BurgerMenue"
import MediaQuery from "react-responsive";
import "../../../assets/layout.d.ts"
import Mail from "../../../assets/mail.svg"
interface Props {
  children: ReactNode;
  pageName: string;
  title: string,
  description: string,
  type: string,
  image: string,


}

const Layout = ({ children, pageName, title, description, type, image }: Props) => (


  <div className="h-full " >

    <div className="  overflow-x-hidden  w-full flex flex-row">



      <MediaQuery maxDeviceWidth={1224}>
        <div className=" h-sreen bg-primary  w-1/4 ">

          <h1>{pageName}</h1>

          <BurgerMenue />

          <div className="  inset-y-2/3  ml-4  flex text-center justify-center rounded-full	 fixed   sticky-button border-black bg-white w-12 sm:w-48 h-12 sm:h-12 hover:bg-primary hover:text-white border-black border-2">
            <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de"><Mail className="w-8 h-8 pt-1" /></a></h2>

          </div>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224}>
        <div className=" h-sreen bg-primary w-1/3">
          <h1>{pageName}</h1>


          <Navigation pageName={pageName} color={'bg-secondary'} mobilewidth={'sm:w-52'} smallwidth={'w-full'} />
          <div className="  inset-y-2/3 	 fixed rounded-t-xl rounded-b-xl  sticky-button border-black bg-white w-18 sm:w-48 h-8 sm:h-12 hover:bg-primary hover:text-white border-black border-2">
            <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de">Contact</a></h2>
          </div>
        </div>
      </MediaQuery>





      <div className=" h-sreen  w-1/2 sm:w-screen lg:w-1/3">

        <main>{children}</main>
      </div>

      <div className="  h-screen bg-secondary  w-1/4 lg:w-1/3">


        <div className="sm:block hidden mt-36 mr-4 text-lg lg:text-xl  mt-4 flex  pl-4 pr-4 pb-4 relative text-white " >  Ich bin ein Full Stack Entwickler aus Hannover mit folgenden Technologien habe ich schon gearbeitet </div>
        <div className='row-exp flex flex-col flex-wrap lg:flex-row justify-between  pr-6 pl-4'>
          <div className='mt-32 sm:mt-0 text-white first-row '>

            <Collapse
              title={"FRONTEND"}
              content1={"Javascript"}
              content2={"Typescript"}
              content3={"ReactJs"}
              content4={"Netlify"}
              content5={"GatsbyJs"}
              content6={"NextJs"}
              more={"..."}
            > </Collapse>





          </div>
          <div className='text-sm  md:text-xl  text-white sec-row pr-4'>

            <Collapse
              title={"BACKEND"}
              content1={"Java"}
              content2={"C++"}
              content3={"NodeJs"}
              content4={"PHP"}

              more={"..."}
            > </Collapse>

          </div>
          <div className='text-sm  md:text-xl  text-white th-row'>

            <Collapse
              title={"WEITERES"}
              content1={"Linux-Server"}
              content2={"Video-Konferenz-Plattform"}
              content3={"Scrum"}
              more={"..."}
            > </Collapse>


          </div>
        </div>
      </div>

    </div >
  </div >






);

export default Layout
