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


        <div className="flex flex-row bg-gradient-3 min-h-screen w-1/1 overflow-y-hidden  ">

            <div className="w-1/3">
                <h1>{pageName}</h1>


                <Navigation pageName={pageName} color={'bg-primary'} absolutePos={"absolute"} mobilewidth={'w-32'} smallwidth={'w-60'} />
                <div className="  inset-y-2/3 	 fixed rounded-t-xl rounded-b-xl  sticky-button border-black bg-white w-18 sm:w-48 h-8 sm:h-12 hover:bg-secondary hover:text-white border-black border-2">
                    <h2 className="text-center text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de">Contact</a></h2>
                </div>
            </div>

            <div className="overscroll-x-contain flex  abstandOben w-3/4 ml-0">
                <div className='w-1/1 absolute top-0 text-right text-6xl position-left ' ><h1><span className='text-primary'>Pro</span><span className='text-secondary'>jects</span></h1></div>

                <Card text1="immajung" text2="www.immajung.de" content="Für das Modelabel welches ich und einige Kollegen führen haben wir den Shop mit Typescript, Gatsby und Snipcart gebaut. Die Seite haben wir selbst designed, wir wollten außergewöhnliche Elemente mit einbauen, womit sich jeder Software-Entwickler mit identifiziert" projectart={'Typescript - Gatsby - Snipcart - Netlify'} imageCard={"picfarbe_ili.png"}></Card>
                <Card text1="FSW-Media" text2="www.fsw-media.com" content="Die FSW-Media Seite habe ich in zusammenarbeit mit der Agentur  Montary-Agency entwickelt, dabei wurde die Seite ausschließlich React benutzt. Die Seite wurde auf einem eigenen Webserver gehosted." projectart={'React'} imageCard={"picfarbe_ili.png"}></Card>

                <Card text1="endlichlernen" text2="www.endlichlernen.de" content="Als die Schulen geschlossen wurden und alle Kids von Zuhause aus dem Unterricht folgen mussten, haben wir ein Projekt gestartet welches Schulen mit Equipment ausstatet , sodass die Kinder von uhasue aus über ein Webkonferenzraum dem Unterricht folgen konnten, darin inbegriffen wwar ein Online Studnenplan und ein Login für die Kinder." projectart={'Linux-Server - Webkonferenzraum'} imageCard={"picfarbe_ili.png"}></Card>
                <Card text1="Testpoint-Hannover" text2="www.test-point-hannover.de" content="Zur Zeit von Corona ergab sich die Möglichkeit zur eröffnung eines eigenen Testzentrums. Die Software wurde dabei von der Agntur Montary-Agency zur verfügung gestellt, ich übernahm das Management für Standort und Vertrieb." projectart={'Testzentrum'} imageCard={"picfarbe_ili.png"}></Card>


            </div>



        </div>







    </div>






);

export default LayoutThree
