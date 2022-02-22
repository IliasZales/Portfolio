import React, { MouseEvent, useRef, useState } from "react"
import "../layout/main/layout.scss"
import "../card/card.scss"
import "../accordion/Accordion"
import { Accordion } from "../accordion/Accordion"
import Image from '../util/image/image'
import MediaQuery from "react-responsive"

interface IProps {
    text1: string,
    text2: string,
    content: string,
    start?: string,
    end?: string,
    projectart: string;
    imageCard: string;

}
interface IState {
    sizein: any,
    time: any,
    sizeout: any,


}

const Card = ({ text1, text2, content, start, end, projectart, imageCard }: IProps, { sizein, time, sizeout }: IState) => {


    const [hoverFont, setHoverFont] = useState("1.5rem")

    const hoverStyles = {
        fontSize: `${hoverFont}`,
        transition: "1s",

    }


    const rollupStyles = {

        transition: "1s"
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
        setTransition(active ? '1s' : '1s')
    }



    return (


        <div className="block">

            <div id="jahr-hover-id" className="text-2xl text-left text-white mt-6  jahr-hover" style={hoverStyles} >{projectart}</div>
            <MediaQuery minDeviceWidth={1224}>
                <div id="bord1" onClick={Object.assign(toggleAccordion, rollupStyles)} onMouseOver={() => setHoverFont("2rem")} onMouseOut={() => setHoverFont("1.5rem")}

                    className="border-black bg-white h:24 sm:h-38 w-11/12 sm:w-4/5 mb-8 mr-5 breitelinks border-black border-2 z-10 ml-0 hover:bg-opacity-40 hover:border-white hover-radius " >

                    <h2 className="text-center text-4xl font-bold mt-2">{text1}</h2>
                    <div className="rounded mx-64 my-4" >


                    </div>
                    <Image imageName={imageCard} maxWidth={250} className='   '></Image>

                    <h3 className="text-center text-2xl mb-2 ">{text2}</h3>
                    <div
                        ref={contentSpace}
                        style={{ maxHeight: `${height}` }}
                        className="overflow-auto transition-max-height overflow-y-hidden duration-700"
                    >
                        <div className="pl-10 pb-10 pr-10">{content}  </div>
                    </div>

                </div>

            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div id="bord1" onClick={Object.assign(toggleAccordion, rollupStyles)} onMouseOver={() => setHoverFont("1.6rem")} onMouseOut={() => setHoverFont("1.5rem")}

                    className="border-black bg-white h:24 sm:h-38 w-11/12 sm:w-4/5 mb-8 mr-5 breitelinks border-black border-2 z-10 ml-0 hover:bg-opacity-40 hover:border-white hover-radius " >

                    <h2 className="text-center text-4xl font-bold mt-2">{text1}</h2>
                    <div className="rounded mx-64 my-4" >


                    </div>
                    <Image imageName={imageCard} maxWidth={250} className='   '></Image>

                    <h3 className="text-center text-2xl mb-2 ">{text2}</h3>
                    <div
                        ref={contentSpace}
                        style={{ maxHeight: `${height}` }}
                        className="overflow-auto transition-max-height overflow-y-hidden duration-700"
                    >
                        <div className="text-justify textjustify pl-10 pb-10 pr-10">{content}  </div>
                    </div>

                </div>

            </MediaQuery>
        </div >




    )
}


export default Card



