"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
const GreatImageAnimation = ({
    list = [
        {
            src: "",
            title: "",
            description: ""
        }
    ]
}) => {
    const timeOut = 5000
    const [currentIndex, setcurrentIndex] = useState(0)
    const [cordinals, setcordinals] = useState()
    const GreateElemRef = useRef();

    useEffect(() => {
        const inter1 = setInterval(() => {
            setcurrentIndex(pv => {
                if (pv == list.length - 1) {
                    return 0
                } else {
                    return pv + 1
                }
            })
        }, timeOut);
        if (GreateElemRef.current) {
            const rect = GreateElemRef.current.getBoundingClientRect()
            console.log(rect);

            setcordinals({
                left: rect.x
            })
        }

        window.onresize = () => {
            if (GreateElemRef.current) {
                const rect = GreateElemRef.current.getBoundingClientRect()
                console.log(rect);

                setcordinals({
                    left: rect.x
                })
            }
        }
        return () => {
            clearInterval(inter1)
        }
    }, [])

    return (
        <div className='w-[99vw]  gap-3 border border-black h-[110vh] flex items-end justify-end relative'>
            <motion.div
           
                className={`flex  z-[11] items-end justify-start  min-w-[180] opacity-50 w-[180] drop-shadow-2xl h-[260] left-0 top-0`}>
                <img className=' rounded-2xl w-full h-full object-cover ' src={list[currentIndex + 1]?.src} />
                <h1 className='absolute z-[10]  w-[100] capitalize bottom-6 text-xl left-2  tracking-tighter font-bold text-white drop-shadow-xl'>{list[currentIndex + 1]?.title?.toUpperCase()}</h1>
            </motion.div>
            {
                cordinals?.left &&
                <motion.div
                    animate={{
                        left: [cordinals?.left, 0],
                        width: ["180px", "100%"],
                        height: ["260px", "100%"]

                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        repeatDelay: (timeOut / 1000) - 1.2
                    }}
                    // style={{
                    //     left: cordinals?.left,
                    //     bottom: 0
                    // }}
                    className={`flex z-[10]   absolute mt-10 items-end justify-start  min-w-[180] bg-blue-500 w-[180] drop-shadow-2xl h-[260] `}>
                    <img className=' rounded-2xl w-full h-full object-cover ' src={list[currentIndex + 1]?.src} />
                    <h1 className='absolute z-[10]  w-[100] capitalize bottom-6 text-xl left-2  tracking-tighter font-bold text-white drop-shadow-xl'>{list[currentIndex + 1]?.title?.toUpperCase()}</h1>
                </motion.div>
            }

            <div className="flex max-w-[40%] z-[100]  overflow-auto scrl_none items-center gap-2">
                {
                    list.map(
                        (img, i) =>
                            <div className="flex items-end justify-start  min-w-[180] w-[180] drop-shadow-2xl h-[260] ]">
                                <img className=' absolute rounded-2xl w-full h-full object-cover ' src={img.src} />
                                <h1 className=' ml-2 mb-5 w-[100] capitalize bottom-6 text-xl left-2  tracking-tighter font-bold text-white drop-shadow-xl'>{img.title?.toUpperCase()}</h1>
                            </div>
                    )
                }
            </div>

            {/* <div className='absolute w-full bg-[#0000002d] top-0 left-0 z-[2] h-full'></div> */}
            {/* <img className='absolute object-cover w-full top-0 left-0 h-full' src={list[currentIndex].src} alt="" /> */}
        </div>
    )
}

export default GreatImageAnimation
