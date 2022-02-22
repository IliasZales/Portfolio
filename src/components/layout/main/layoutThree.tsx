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
import HorizontalScroll from "react-scroll-horizontal";
import MediaQuery from "react-responsive";
import { slide as Menu } from 'react-burger-menu'
import BurgerMenue from "../../burgerMenue/BurgerMenue"
import Mail from "../../../assets/mail.svg"

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


        <div className="flex flex-row bg-gradient-3 min-h-screen w-1/1 overflow-y-hidden overflow-x-hidden  ">

            <MediaQuery maxDeviceWidth={1224}>
                <div className="w-24">
                    <h1>{pageName}</h1>

                    <BurgerMenue />

                    <div className="  inset-y-2/3  ml-4  flex text-center justify-center rounded-full	 fixed   sticky-button border-black bg-white w-12 sm:w-48 h-12 sm:h-12 hover:bg-primary hover:text-white border-black border-2">
                        <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de"><Mail className="w-8 h-8 pt-1" /></a></h2>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1224}>
                <div className="w-52">
                    <h1>{pageName}</h1>


                    <Navigation pageName={pageName} color={'bg-primary'} mobilewidth={'w-32'} smallwidth={'w-full'} />
                    <div className="  inset-y-2/3 	 fixed rounded-t-xl rounded-b-xl  sticky-button border-black bg-white w-18 sm:w-48 h-8 sm:h-12 hover:bg-primary hover:text-white border-black border-2">
                        <h2 className="text-center pt-1 text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de">Contact</a></h2>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div className="flex flex-col abstandOben w-3/4 ml-0 overflow-x-hidden">

                    <div className='w-1/1    absolute top-0 text-right text-l sm:text-2xl position-left mr-4 overflow-x-hidden' ><h1><span className='text-primary'>Pro</span><span className='text-secondary'>jects</span></h1></div>

                    <Card text1="immajung" text2="www.immajung.de" content="Für das Modelabel welches ich und einige Kollegen führen haben wir den Shop mit Typescript, Gatsby und Snipcart gebaut. Die Seite haben wir selbst designed, wir wollten außergewöhnliche Elemente mit einbauen, womit sich jeder Software-Entwickler mit identifiziert" projectart={'Typescript - Gatsby - Snipcart - Netlify'} imageCard={"picfarbe_ili.png"}></Card>
                    <Card text1="FSW-Media" text2="www.fsw-media.com" content="Die FSW-Media Seite habe ich in zusammenarbeit mit der Agentur  Montary-Agency entwickelt, dabei wurde die Seite ausschließlich React benutzt. Die Seite wurde auf einem eigenen Webserver gehosted." projectart={'React'} imageCard={"picfarbe_ili.png"}></Card>

                    <Card text1="endlichlernen" text2="www.endlichlernen.de" content="Als die Schulen geschlossen wurden und alle Kids von Zuhause aus dem Unterricht folgen mussten, haben wir ein Projekt gestartet welches Schulen mit Equipment ausstatet , sodass die Kinder von uhasue aus über ein Webkonferenzraum dem Unterricht folgen konnten, darin inbegriffen wwar ein Online Studnenplan und ein Login für die Kinder." projectart={'Linux-Server - Webkonferenzraum'} imageCard={"picfarbe_ili.png"}></Card>
                    <Card text1="Testpoint-Hannover" text2="www.test-point-hannover.de" content="Zur Zeit von Corona ergab sich die Möglichkeit zur eröffnung eines eigenen Testzentrums. Die Software wurde dabei von der Agntur Montary-Agency zur verfügung gestellt, ich übernahm das Management für Standort und Vertrieb." projectart={'Testzentrum'} imageCard={"picfarbe_ili.png"}></Card>


                </div>
            </MediaQuery>

            <MediaQuery minDeviceWidth={1224}>
                <div className="overscroll-x-contain flex  abstandOben w-3/4 ml-0">

                    <div className='w-1/1    absolute top-0 text-right text-6xl position-left ' ><h1><span className='text-primary'>Pro</span><span className='text-secondary'>jects</span></h1></div>
                    <HorizontalScroll reverseScroll={true} className="ml-4">
                        <Card text1="immajung" text2="www.immajung.de" content="Für das Modelabel welches ich und einige Kollegen führen haben wir den Shop mit Typescript, Gatsby und Snipcart gebaut. Die Seite haben wir selbst designed, wir wollten außergewöhnliche Elemente mit einbauen, womit sich jeder Software-Entwickler mit identifiziert" projectart={'Typescript - Gatsby - Snipcart - Netlify'} imageCard={"picfarbe_ili.png"}></Card>
                        <Card text1="FSW-Media" text2="www.fsw-media.com" content="Die FSW-Media Seite habe ich in zusammenarbeit mit der Agentur  Montary-Agency entwickelt, dabei wurde die Seite ausschließlich React benutzt. Die Seite wurde auf einem eigenen Webserver gehosted." projectart={'React'} imageCard={"picfarbe_ili.png"}></Card>

                        <Card text1="endlichlernen" text2="www.endlichlernen.de" content="Als die Schulen geschlossen wurden und alle Kids von Zuhause aus dem Unterricht folgen mussten, haben wir ein Projekt gestartet welches Schulen mit Equipment ausstatet , sodass die Kinder von uhasue aus über ein Webkonferenzraum dem Unterricht folgen konnten, darin inbegriffen wwar ein Online Studnenplan und ein Login für die Kinder." projectart={'Linux-Server - Webkonferenzraum'} imageCard={"picfarbe_ili.png"}></Card>
                        <Card text1="Testpoint-Hannover" text2="www.test-point-hannover.de" content="Zur Zeit von Corona ergab sich die Möglichkeit zur eröffnung eines eigenen Testzentrums. Die Software wurde dabei von der Agntur Montary-Agency zur verfügung gestellt, ich übernahm das Management für Standort und Vertrieb." projectart={'Testzentrum'} imageCard={"picfarbe_ili.png"}></Card>
                    </HorizontalScroll>

                </div>
            </MediaQuery>



        </div>







    </div>






);

export default LayoutThree
