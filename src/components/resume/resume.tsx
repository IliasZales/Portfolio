import React from "react"
import "../layout/main/layout.scss"



interface Props {
  text1: string,
  text2: string
}
 
const Resume = ({text1, text2} : Props) => {
   

    return (
       
      
        <div className="  border-black bg-white h-38  m-16 breitelinks border-black border-2 z-10 ">
        <h2 className="text-center text-4xl font-bold mt-2">{text1}</h2>
        <div className="rounded mx-64 my-4" ></div>
        <h3 className="text-center text-2xl mb-2 ">{text2}</h3>
      </div>
         
        
      
    )
}


export default Resume



    