import React, { MouseEvent, useRef, useState } from "react"
import "../layout/main/layout.scss"
import "../resume/resume.scss"
import "../accordion/Accordion"
import { Accordion } from "../accordion/Accordion"


interface IProps {
  text1: string,
  text2: string,
  content: string,
  start: string,
  end: string,

}
interface IState {
  sizein: any,
  time: any,
  sizeout: any,


}

const Resume = ({ text1, text2, content, start, end }: IProps, { sizein, time, sizeout }: IState) => {


  const [hoverFont, setHoverFont] = useState("1.5rem")
  const hoverStyles = {
    fontSize: `${hoverFont}`,
    transition: "2s",

  }


  const rollupStyles = {

    transition: "2s"
  }

  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [transition, setTransition] = useState('2s')
  const contentSpace = useRef<HTMLDivElement>(null)
  function toggleAccordion() {
    setActive(active === false ? true : false)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)    //`${contentSpace.current.scrollHeight}px`
    //  setRotate()
    setTransition(active ? '2s' : '3s')
  }



  return (


    <div className="flex flex-col ">

      <div id="jahr-hover-id" className="text-xs sm:text-2xl text-center text-white mt-6 ml-8 jahr-hover" style={hoverStyles} >{start} - {end}</div>
      <div id="bord1" onClick={Object.assign(toggleAccordion, rollupStyles)} onMouseOver={() => setHoverFont("2rem")} onMouseOut={() => setHoverFont("1.5rem")}
        className="border-black bg-white h-38 w-11/12 sm:w-2/3 mb-8 mr-12 breitelinks border-black border-2 z-10 ml-0 hover:bg-opacity-40 hover:border-white hover-radius " >

        <h2 className="text-center text-md sm:text-4xl pl-2 pr-2 font-bold mt-2">{text1}</h2>

        <div className="rounded mx-64 my-4" ></div>

        <h3 className="text-center text-sm sm:text-2xl mb-2 ">{text2}</h3>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto transition-max-height overflow-y-hidden duration-700"
        >
          <div className="jutifynospace pl-2 pr-2 sm:pl-10 pb-10 sm:pr-10 text-sm sm:text-lg text-justify">{content}  </div>
        </div>

      </div>



    </div>




  )
}


export default Resume



