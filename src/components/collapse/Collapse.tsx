import React, { useEffect, useRef, useState } from 'react'

interface CollapseProps {
    title: React.ReactNode
    content1: React.ReactNode
    content2?: React.ReactNode
    content3?: React.ReactNode
    content4?: React.ReactNode
    content5?: React.ReactNode
    content6?: React.ReactNode
    more: React.ReactNode
}

export const Collapse: React.FC<CollapseProps> = ({ title, content1, content2, content3, content4, content5, content6, more }) => {



    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')

    const contentSpace = useRef<HTMLDivElement>(null)



    function toggleAccordion() {



        setActive(active === false ? true : false)
        // @ts-ignore
        setHeight(active ? '0px' : '150px')    //`${contentSpace.current.scrollHeight}px`
        //  setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
    }

    return (
        <div className="flex flex-col">
            <button
                className="py-6  cursor-pointer  flex items-center "
                onClick={toggleAccordion}
            >
                <p className="text-sm  md:text-xl  text-primary ">{title}</p>

            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-auto transition-max-height overflow-y-hidden duration-700 ease-in-out"
            >
                <div className="pb-10 flex flex-col">
                    <div>{content1}</div>
                    <div>{content2}</div>
                    <div>{content3}</div>
                    <div>{content4}</div>
                    <div>{content5}</div>
                    <div>{content6}</div>
                    <div>{more}</div>
                </div>
            </div>
        </div>
    )
}