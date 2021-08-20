import React from "react"
import "../layout/main/layout.scss"



interface Props {
  text1: string,
  text2: string,
  start: string,
  end: string,

}

const Resume = ({ text1, text2, start, end }: Props) => {


  return (


    <div className="flex flex-col ">
      <div className="text-2xl text-center text-white mt-6 ml-8" >{start} -- {end}</div>
      <div className="  border-black bg-white h-38 w-2/3 mb-8 mr-12 breitelinks border-black border-2 z-10 ml-0 ">
        <h2 className="text-center text-4xl font-bold mt-2">{text1}</h2>
        <div className="rounded mx-64 my-4" ></div>
        <h3 className="text-center text-2xl mb-2 ">{text2}</h3>

      </div>


    </div>




  )
}


export default Resume



