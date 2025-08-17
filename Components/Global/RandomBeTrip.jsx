"use client";
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import Bee2 from '../lotties/Bee2';
import MainChatbotCmp from '../Chatbot/MainChatbotCmp';


export let StartTheRandowmTrip = () => { }
export let OpenChatBot = () => { }

const RandomBeTrip = () => {
    const BeeRef = useRef();
    const [Options, setOptions] = useState({
        top: ["30%", "10%"],
        left: ["-10%", "40%"],
        scaleX: [1, 1]
    });


    StartTheRandowmTrip = () => {
        setRandomTrip(true)
    };


    const [RandomTrip, setRandomTrip] = useState(false);
    let lastTop = Options.top[1];
    let lastLeft = Options.left[1];

    const GenerateRandomPosi = (t, l) => {
        const NewTopVal = t ? t : Math.random() * 105 - 30;
        const NewLeftVal = l ? l : Math.random() * 105 - 30;
        setOptions({
            left: [lastLeft, `${NewLeftVal}%`],
            top: [lastTop, `${NewTopVal}%`],
            scaleX: [parseFloat(NewLeftVal) < parseFloat(lastLeft) ? -1 : 1]
        });
        lastLeft = NewLeftVal;
        lastTop = NewTopVal;

    }


    let InterVal;
    useEffect(() => {
        if (RandomTrip) {

            InterVal = setInterval(() => { GenerateRandomPosi() }, 12000);
        }



        return () => clearInterval(InterVal)
    }, [RandomTrip]);

    const [chatBotVISIBLE, setchatBotVISIBLE] = useState(false);


    OpenChatBot = () => {
        setchatBotVISIBLE(true)
    };

    
    const [BeeMessageVisible, setBeeMessageVisible] = useState(true)
    const HandelClickTheBee = () => {
        setchatBotVISIBLE(true)
        // GenerateRandomPosi(-50, -50)
        // setBeeMessageVisible(true);
        // setTimeout(() => {
        //     setRandomTrip(false);

        // }, 3000);


        // setTimeout(() => {
        //     setRandomTrip(true);
        // }, 20000);
    };
    useEffect(
        () => {
            let TimeOUt;
            if (BeeMessageVisible) {
                TimeOUt = setTimeout(() => {
                    setBeeMessageVisible(false)
                }, 3000)
            }

            return () => {
                clearTimeout(TimeOUt)
            }
        }, [BeeMessageVisible])


    return (
        <>
            {
                RandomTrip &&
                <>
                    <motion.div
                        onClick={HandelClickTheBee}
                        animate={Options}
                        transition={{
                            duration: 7,
                            ease: "easeInOut",
                        }}
                        style={{
                            zIndex: "999"
                        }}
                        className='z-10  fixed w-fit '>
                        <Bee2 width={60} ref={BeeRef} />


                    </motion.div>
                    {
                        BeeMessageVisible &&
                        <motion.div
                            animate={{
                                left: Options.left,
                                top: Options.top
                            }}
                            transition={{
                                duration: 7,
                                ease: "easeInOut",
                            }}
                            style={{
                                zIndex: "999",
                                filter: "drop-shadow(0 0 6px var(--filter-color))",
                            }}

                            className="fixed  mt-15  bg-background p-3 font-semibold tracking-tighter text-sm rounded-md !rounded-tl-0 w-[200] ">Ooo0h , hold down , i'm going
                        </motion.div>
                    }
                </>

            }
            {
                chatBotVISIBLE &&
                <MainChatbotCmp setchatBotVISIBLE={setchatBotVISIBLE} />

            }

        </>
    )
}

export default RandomBeTrip
