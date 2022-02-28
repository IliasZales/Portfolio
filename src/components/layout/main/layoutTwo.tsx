import React, { ReactNode } from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../../shared/navigation/Navigation';
import NavItem from '../../../models/NavItem';
import "./layout.scss"
import { homedir } from "os";
import PicConatainer from '../../picContainer/PicContainer'
import "../../resume/resume"
import Resume from "../../resume/resume";
import MediaQuery from "react-responsive";
import BurgerMenue from "../../burgerMenue/BurgerMenue";
import Mail from "../../../assets/mail.svg"

interface Props {
  children: ReactNode;
  pageName: string;
  title: string,
  description: string,
  type: string,
  image: string,
}





const LayoutTwo = ({ children, pageName, title, description, type, image }: Props) => (


  <div className="min-h-screen " >
    <main>{children}</main>


    <div className="flex flex-row bg-gradient min-h-screen w-1/1  ">

      <MediaQuery maxDeviceWidth={1224}>
        <div className="w-1/4">
          <h1>{pageName}</h1>


          <BurgerMenue />
          <div className=" inset-y-2/3   ml-4  flex text-center justify-center rounded-full  sticky-button border-black bg-white w-12 lg:w-48 h-12 sm:h-12 hover:bg-secondary hover:text-white border-black border-2">
            <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de"><Mail className="w-8 h-8 pt-1" /></a></h2>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224}>
        <div className="w-1/3">
          <h1>{pageName}</h1>


          <Navigation pageName={pageName} color={'bg-secondary'} mobilewidth={'w-52'} smallwidth={'w-52'} />
          <div className=" inset-y-2/3  rounded-t-xl rounded-b-xl  sticky-button border-black bg-white w-18 sm:w-48 h-8 sm:h-12 hover:bg-secondary hover:text-white border-black border-2">
            <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de">Contact</a></h2>
          </div>
        </div>
      </MediaQuery>


      <div className="overflow-scroll abstandOben w-3/4 -ml-4">
        <div className='w-1/1    absolute top-0 text-right text-m sm:text-xl md:text-4xl lg:text-6xl position-left  overflow-x-hidden' ><h1><span className='text-white'>Timeline</span></h1></div>


        <Resume text1="Freelancer as Software-Developer in  Frontend & Backend Freelancer Development" text2="it-iz.de" content="I have been working as a self-employed since 2019. After getting my bachelor’s degree, i had my first job as freelance in a company of furniture. Next followed a project made for schools. A video conference room where students joing their classes from home." start={"2019"} end={"2022"}></Resume>
        <Resume text1="Design and Management - Fashionlabel" text2="Binary-Cult" content="A project created by friends and myself. Our own fashion label for clothes which software and web developers are interested to." start={"2019"} end={"2022"}></Resume>
        <Resume text1="Part owner and Management" text2="Testpoint-Hannover - Test Center for Covid-19" content="At the time of Corona, the opportunity arose to open our own test center. The software was provided by the Agntur Montary-Agency, I took over the management for location and sales." start={"2021"} end={"2022"}></Resume>
        <Resume text1="Software-Developer Frontend & Backend-Developer" text2="Marketing Agency - Montary-Agency" content="I was part of the Montary-Agency team, working as a frontend and backend developer for one year. Most of the projects having me as a frontend developer, using React and Typescript." start={"2021"} end={"2022"}></Resume>
        <Resume text1="Trainer for children and adults (martial arts)" text2="TA WingTsun (martial arts)" content="At the age of  11 started the martial art called, TA WingTsun. Three years later bacame a training assistant for children. Under my Si-Fu's (teacher) direction i am giving courses to adults in Hanover. I am able to lead courses to primary and secondary schools. " start={"2016"} end={"2022"}></Resume>
        <Resume text1="Administration und Webendevelopment" text2="TA WingTsun (martial arts)" content="As a trainer for children and adults in TA WingTsun I also took over the web development and the internet presence." start={"2018"} end={"2020"}></Resume>
        <Resume text1="Qualitymanagement" text2="Finanzinformatik" content="As a student I worked in Finanzinformatik for quality assurance at IF6. My tasks were to perform test executions and log analysis for the internet branch." start={"2017"} end={"2018"}></Resume >
        <Resume text1="Manager of a Bistro" text2="Blauer See Garbsen" content="From a very young age, i was running one of the family restaurants. As an organiser and manager of the business i tried to solve every daily problem." start={"2014"} end={"2015"}></Resume>

      </div>



    </div>







  </div>






);

export default LayoutTwo
