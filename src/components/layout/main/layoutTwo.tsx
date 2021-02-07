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





const Layout = ({ children, pageName, title, description, type,image }: Props) => (
 
  
   <div className=" " >
     <main>{children}</main>
     <div className=" flex flex-row">
     <div className=" bg-primary absolute top-0 left-0 w-10/12 h-screen">
        
        <h1>{pageName}</h1>
        <Navigation pageName={pageName} wide={'w-1/4'} />
        

        <div className="absolute bottom-0 border-black bg-white w-48 h-12  m-12 border-black border-2">
           <h2 className="text-center text-2xl font-bold">Contact</h2> 
        </div>


        <Resume text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim"></Resume>
        <Resume text1="Design and Management - Modelabel" text2="Binary-Cult"></Resume>
        <Resume text1="Administration und Webentwicklung" text2="TA WingTsun"></Resume>
        <Resume text1="Studentische Aushilfskraft - Qualitätssicherung" text2="Finanzinformatik"></Resume>


        


      </div>
   
    
      <div className="  bg-secondary absolute top-0 right-0 w-2/12 h-screen">
      

      </div>
 
    
       
      
     </div>
   </div>
      
      
      
    
 

);

export default Layout
