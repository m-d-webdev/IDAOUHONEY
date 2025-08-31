"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import ColoredBorderCard from "./ColoredBorderCard"
import GreatH1 from "../Global/GreatH1"
const HoneyBottleCha = () => {
    const { t } = useTranslation()
    return (
        <div
            style={{
                backgroundSize: "contain",
                backgroundImage: 'url("")'
            }}
            className='  xl:mt-30 mt-20 border border-foreground/15  min-h-screen relative  w-full  p-4  flex flex-col items-center justify-center'>
            <img src={"media/ChatGPT Image Jul 30, 2025, 01_37_04 PM.png"} className="max-w-[1400] opacity-60 w-full h-full object-center object-cover absolute z-[0] dark:hidden" />
            <img src={"media/bgDark.png"} className="max-w-[1400] hidden dark:block w-full h-full object-center object-cover absolute z-[0]" />

            <div className="w-full flex gap-3 z-[2] mb-20 justify-center items-center">
                <div className="flex flex-col items-center-safe justify-center">
                    <GreatH1 className={"!text-3xl"}>
                        {t("MAIN.HONEYCHARS.TITLE1")}
                        {t("MAIN.HONEYCHARS.TITLE2")}
                    </GreatH1>
                    <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                    <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>
                </div>
            </div>
            <img src="/media/HoneyBottle2.png" className="h-[250] z-[2]" alt="" />

            <div className="w-full z-[2]-mt-2 relative gap-1  flex items-start justify-center max-w-[1200] ">
                <div className="min-w-[2] relative  bg-foreground/20 h-[60] "></div>


                <div className="absolute top-[60] flex items-center justify-center gap-[11] w-full  ">
                    <div className="w-[34%]  relative bg-foreground/20 h-[2] ">
                        {
                            Array(10).fill().map((a, i) =>
                                <motion.div
                                    key={i}
                                    animate={{
                                        top: [-60, 0, 0, 100],
                                        left: ["100%", "100%", ".3%", ".3%"],

                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: i * .05,
                                        times: [.2, 1, .2],
                                        ease: "linear",
                                        repeatDelay: 5,
                                    }}
                                    style={{
                                        opacity: (1 - (i * 0.1)),
                                        filter: "drop-shadow(0 0 5px #ff0000)"
                                    }}
                                    className="ml-[-3] absolute w-[4] h-[4]    bg-[#ff0000] ">
                                </motion.div>
                            )
                        }
                    </div>
                    <div className="w-[34%] relative  bg-foreground/20 h-[2] ">
                        {
                            Array(10).fill().map((a, i) =>
                                <motion.div
                                    key={i}
                                    animate={{
                                        top: [-60, 0, 0, 100],
                                        right: ["100%", "100%", ".3%", ".3%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: i * .05 + 1,
                                        ease: "linear",
                                        repeatDelay: 5,
                                    }}
                                    style={{
                                        opacity: (1 - (i * 0.1)),
                                        filter: "drop-shadow(0 0 5px #096fff)"
                                    }}
                                    className="mr-[-3] absolute w-[4] h-[4]    bg-[#096fff] ">
                                </motion.div>
                            )
                        }
                    </div>

                </div>

                <div className="absolute top-[60] flex items-center justify-center gap-[11] w-full  ">
                    <div className="w-[34%]  flex items-start justify-start">
                        <div className="min-w-[2] bg-foreground/20 h-[100] "></div>
                    </div>
                    <div className="w-[34%]  flex items-end justify-end">
                        <div className="min-w-[2] bg-foreground/20 h-[100] "></div>
                    </div>
                </div>
                <div className="min-w-[2] relative  bg-foreground/20 h-[140]">
                    {
                        Array(10).fill().map((a, i) =>
                            <motion.div
                                key={i}
                                animate={{
                                    top: [0, "110%"],

                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    delay: i * .03 + 1.4,
                                    ease: "linear",
                                    repeatDelay: 6,
                                }}
                                style={{
                                    opacity: (1 - (i * 0.1)),
                                    filter: "drop-shadow(0 0 5px #bb00ff)"
                                }}
                                className="absolute w-[4] h-[4]    bg-[#bb00ff] ">
                            </motion.div>
                        )
                    }
                </div>
                <div className="min-w-[2] bg-foreground/20 h-[60]"></div>



            </div>


            <div className="w-full z-[2] relative  max-w-[1200] gap-10  grid md:grid-cols-3 grid-cols-1">
                <ColoredBorderCard color="#ff0000" delay={1.9} text={t("MAIN.HONEYCHARS.CHAR1")} />
                <ColoredBorderCard color="#bb00ff" delay={2.3} text={t("MAIN.HONEYCHARS.CHAR2")} />
                <ColoredBorderCard color="#096fff" delay={2.9} text={t("MAIN.HONEYCHARS.CHAR3")} />
            </div>
        </div >
    )
}

export default HoneyBottleCha
