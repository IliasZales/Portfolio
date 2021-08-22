import React, { MouseEvent, useState } from "react"
import "../layout/main/layout.scss"
import "../resume/resume.scss"



interface IProps {
  text1: string,
  text2: string,
  start: string,
  end: string,

}
interface IState {
  sizein: any,
  time: any,
  sizeout: any,

}

const Resume = ({ text1, text2, start, end }: IProps, { sizein, time, sizeout }: IState) => {

  sizein = "2rem";
  time = "1s"
  sizeout = "1.5rem"
  const [hoverFont, setHoverFont] = useState("1.5rem")
  const hoverStyles = {
    fontSize: `${hoverFont}`,
    transition: "2s"
  }


  return (


    <div className="flex flex-col ">
      <div id="jahr-hover-id" className="text-2xl text-center text-white mt-6 ml-8 jahr-hover" style={hoverStyles} >{start} -- {end}</div>
      <div id="bord1" onMouseOver={() => setHoverFont("2rem")} onMouseOut={() => setHoverFont("1.5rem")} className="border-black bg-white h-38 w-2/3 mb-8 mr-12 breitelinks border-black border-2 z-10 ml-0 hover:bg-opacity-40 hover:border-white hover-radius">
        <h2 className="text-center text-4xl font-bold mt-2">{text1}</h2>
        <div className="rounded mx-64 my-4" ></div>
        <h3 className="text-center text-2xl mb-2 ">{text2}</h3>

      </div>


    </div>




  )
}


export default Resume



