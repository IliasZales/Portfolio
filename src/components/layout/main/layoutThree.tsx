import React, { ReactNode, useState } from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../../shared/navigation/Navigation';
import NavItem from '../../../models/NavItem';
import "./layout.scss"
import { homedir } from "os";
import PicConatainer from '../../picContainer/PicContainer'
import "../../resume/resume"
import Resume from "../../resume/resume";
import Card from "../../card/card"





interface Props {
    children: ReactNode;
    pageName: string;
    title: string,
    description: string,
    type: string,
    image: string,
}




const LayoutThree = ({ children, pageName, title, description, type, image }: Props) => (


    <div className="min-h-screen " >
        <main>{children}</main>


        <div className="flex flex-row bg-gradient-3 min-h-screen w-1/1  ">

            <div className="w-1/3">
                <h1>{pageName}</h1>


                <Navigation pageName={pageName} wide={'w-3/4'} color={'bg-primary'} />

                <div className="sticky-button border-black bg-white w-48 h-12  border-black border-2">
                    <h2 className="text-center text-2xl font-bold">Contact</h2>
                </div>
            </div>

            <div className="overscroll-x-contain abstandOben w-3/4 ml-0">
                <div className='w-1/1 absolute top-0 text-right text-6xl position-left ' ><h1><span className='text-primary'>Pro</span><span className='text-secondary'>jects</span></h1></div>


                <Card text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim" content="neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich dneuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1as und das gemacht1neuer contetn heir habe ich das und das gemacht1" start={"2018"} end={"2020"}></Card>
                <Card text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim" content="neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich dneuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1as und das gemacht1neuer contetn heir habe ich das und das gemacht1" start={"2018"} end={"2020"}></Card>
                <Card text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim" content="neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich dneuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1as und das gemacht1neuer contetn heir habe ich das und das gemacht1" start={"2018"} end={"2020"}></Card>
                <Card text1="BA Sc. Informationstechnologie" text2="Universität Hildesheim" content="neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich dneuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1neuer contetn heir habe ich das und das gemacht1as und das gemacht1neuer contetn heir habe ich das und das gemacht1" start={"2018"} end={"2020"}></Card>


            </div>



        </div>







    </div>






);

export default LayoutThree
