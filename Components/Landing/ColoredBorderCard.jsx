import React from 'react'
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
const ColoredBorderCard = ({ delay, text = "", color = '' }) => {
    return (
        <div
            style={{
                filter: `drop-shadow(-6px 0px 7px var(--filter-color))`
            }}
            className="relative w-full flex items-center justify-center ">
            <div

                className={`p-5 border border-foreground/20 relative w-[98.8%] min-w-[98.8%] h-[98.4%] z-[2] rounded-[7px] pt-8 bg-background`}>


                <h1
                    className="tracking-tighter font-medium text-xl text-center">
                    {text}
                </h1>


            </div>
            <motion.div
                animate={{
                    width: ["0%", "100%", "100%"],
                    height: ["2%", "2%", "100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay,
                    repeatDelay: 5,
                }}
                className={`w-full  top-0  rounded-[10px] h-full bg-[${color}] absolute`}
            ></motion.div>

            {/* -------------------------- */}

            <motion.div
                animate={{
                    width: ["100%", 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: 2 + delay,
                    repeatDelay: 5.98,
                }}
                className="w-full  bottom-0   h-2 bg-background absolute"></motion.div>

            <motion.div
                animate={{
                    scale: [0, 1.2]
                }}
                transition={{
                    repeat: Infinity,
                    duration: .5,
                    delay: delay,
                    repeatDelay: 6.5,
                }}
                style={{
                    filter: `drop-shadow(0 0 5px ${color})`
                }}
                className={` !w-2  -top-1 z-[3] rounded-full h-2 bg-[${color}] absolute`}></motion.div>
        </div>
    )
}

export default ColoredBorderCard
