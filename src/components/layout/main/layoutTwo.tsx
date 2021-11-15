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

      <div className="w-1/3">
        <h1>{pageName}</h1>


        <Navigation pageName={pageName} wide={'w-48'} color={'bg-secondary'} />

        <div className="sticky-button border-black bg-white w-48 h-12  border-black border-2">
          <h2 className="text-center text-2xl font-bold">Contact</h2>
        </div>
      </div>

      <div className="overflow-scroll abstandOben w-3/4 ml-0">
        <div className='w-1/1 absolute top-0 text-right text-6xl position-left ' ><h1><span className='text-secondary'>Time</span><span className='text-primary'>line</span></h1></div>


        <Resume text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim" content="neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich dneuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1as und das gemacht1neuer contetn heir habe ich das und das gemacht1" start={"2018"} end={"2020"}></Resume>
        <Resume text1="Design and Management - Modelabel" text2="Binary-Cult" content="neuer contetn heir habe ich das und das gemacht2" start={"2019"} end={"2020"}></Resume>
        <Resume text1="Administration und Webentwicklung" text2="TA WingTsun" content="neuer contetn heir habe ich das und das gemacht3" start={"2015"} end={"2015"}></Resume>
        <Resume text1="Studentische Aushilfskraft - Qualitätssicherung" text2="Finanzinformatik" content="neuer contetn heir habe ich das und das gemacht4" start={"2012"} end={"2014"}></Resume>
        <Resume text1="Studentische Aushilfskraft - Qualitätssicherung" text2="Finanzinformatik" content="neuer contetn heir habe ich das und das gemacht5" start={"2012"} end={"2014"}></Resume>
        <Resume text1="Studentische Aushilfskraft - Qualitätssicherung" text2="Finanzinformatik" content="neuer contetn heir habe ich das und das gemacht6" start={"2012"} end={"2014"}></Resume>
        <Resume text1="Studentische Aushilfskraft - Qualitätssicherung" text2="Finanzinformatik" content="neuer contetn heir habe ich das und das gemacht7" start={"2012"} end={"2014"}></Resume>

      </div>



    </div>







  </div>






);

export default LayoutTwo
