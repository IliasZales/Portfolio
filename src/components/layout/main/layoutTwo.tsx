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


        <Navigation pageName={pageName} color={'bg-secondary'} mobilewidth={'w-30'} smallwidth={'w-60'} />
        <div className=" inset-y-2/3  rounded-t-xl rounded-b-xl  sticky-button border-black bg-white w-18 sm:w-48 h-8 sm:h-12 hover:bg-secondary hover:text-white border-black border-2">
          <h2 className="text-center text-sm sm:text-2xl font-bold "><a href="mailto:info@it-iz.de">Contact</a></h2>
        </div>
      </div>

      <div className="overflow-scroll abstandOben w-3/4 ml-0">
        <div className='w-1/1 absolute top-0 text-right text-2xl sm:text-6xl position-left ' ><h1><span className='text-secondary'>Time</span><span className='text-primary'>line</span></h1></div>


        <Resume text1="Freelancer als Software-Developer in der Frontend & Backend Entwicklung" text2="it-iz.de" content="Als Selbstständiger habe ich seit 2019 gestartet, nach meinem Bachelor startete ich bei einer Firma für die Herstellung von Möbeln. Danach folgten Aufträge für die Digitalisierung von Schulen, dabei wurde ein Video-KOnferenzraum entwickelt, wo die Schüler von Zuhause dem Unterricht im Klassenraum folgen konnten. Weitere Webentwicklungsaufträge folgten." start={"2019"} end={"2022"}></Resume>
        <Resume text1="Design and Management - Modelabel" text2="Binary-Cult" content="Dieses Projekt enstand durch das Interesse an Mode, einige alte Kommulitonen und ich erstellten unser eigenes Modelabel für coole Kleidung die Entwickler und Tech interissierte tragen wollen." start={"2019"} end={"2022"}></Resume>
        <Resume text1="Software-Developer Frontend & Backend-Entwicklung" text2="Marketing Agentur Montary-Agency" content="Für die Agentur Montary-Agency arbeitete ich ein Jahr, als Forn & Backend entwickler, dabei waren die meisten Aufträge als Frontend entwickler mit React und Typescript." start={"2021"} end={"2022"}></Resume>
        <Resume text1="Trainer für Kinder Und Erwachsene (Kampfkunst)" text2="TA WingTsun (Kampfkunst)" content="Mit 11 Jahren fing ich die Kampfkunst TA WingTsun an, diese begleitet mich also schon mein lebenlang, schnell wurde mir klar, dass ein draht zu kindern und Jugendliche habe, deshalb entschied ich mich mit 14 Jahren als Assisten im Kindertraining mitzuwirken, nach der Ausbildung als Trainer konnte ich eigenverantwortlich unter der Leitung meines Si-Fu's (Lehrer) Kinder und Erwachsenenkurse in Hannover leiten, ich durfte außerdem an vielen Kursen für Schulen und öffentlichen Einrichtungen Kurse für Gewaltprävention und Sicheheit leiten.  " start={"2016"} end={"2022"}></Resume>
        <Resume text1="Administration und Webentwicklung" text2="TA WingTsun (Kampfkunst)" content="Als Trainer für Kinder und Erwachsene im TA WingTsun übernahm ich auch die Webentwicklung und den Internetauftritt." start={"2018"} end={"2020"}></Resume>
        <Resume text1="Qualitätsmanagement" text2="Finanzinformatik" content="Als Werkstudent habe ich in der Finanzinformatik für die Qualitätsicherung an der IF6 gearbeitet. Meine Aufgaben waren Testdurchführungen und Loganalyse für die Internet-Filiale durchzuführen." start={"2017"} end={"2018"}></Resume >
        <Resume text1="Geschäftsführer eines Bistros" text2="Blauen See Garbsen" content="In jungen Jahren übernham ich die Verantwortung eines der Lokale meiner Familie, dies stärkte mich schon Selbständig zu organisieren und zu Leiten, stress war bei dieser Arbeit Tagesordnung." start={"2014"} end={"2015"}></Resume>

      </div>



    </div>







  </div>






);

export default LayoutTwo
