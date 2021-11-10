import React, { ReactNode } from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../../shared/navigation/Navigation';
import NavItem from '../../../models/NavItem';
import "./layout.scss"
import { homedir } from "os";
import PicConatainer from '../../picContainer/PicContainer'

interface Props {
  children: ReactNode;
  pageName: string;
  title: string,
  description: string,
  type: string,
  image: string,
}




const Layout = ({ children, pageName, title, description, type, image }: Props) => (


  <div className=" " >
    <main>{children}</main>
    <div className=" flex flex-row">

      <div className="bg-primary absolute top-0 left-0 w-6/12 h-screen">

        <h1>{pageName}</h1>
        <Navigation pageName={pageName} wide={'w-1/4'} color={'bg-secondary'} />

        <div className="sticky-button border-black bg-white w-48 h-12  border-black border-2">
          <h2 className="text-center text-2xl font-bold">Contact</h2>
        </div>


      </div>

      <div className="  bg-secondary absolute top-0 right-0 w-6/12 h-screen">
        <div className=' w-2/6 h-40  bg-primary  absolute bottom-0 right-0 mb-20  ' >
          <h3 className="text-black text-2xl text-left align-middle pb-2 pt-4 pl-10">Github</h3>
          <h3 className="text-black text-2xl text-left align-middle pb-2 pl-10">Xing</h3>
          <h3 className="text-black text-2xl text-left align-middle pl-10">Instagram</h3>

        </div>
      </div>

    </div>
  </div>






);

export default Layout
