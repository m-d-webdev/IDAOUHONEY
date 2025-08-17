import React, { useEffect, useRef, useState } from 'react'
import Bee from '../lotties/Bee'
import { motion } from "framer-motion"
import Bee2 from '../lotties/Bee2';
import { StartTheRandowmTrip } from '../Global/RandomBeTrip';

const BeeMovements = () => {
    const BeeRef = useRef();
    const [Options, setOptions] = useState({
        top: [-200, -100],
        left: [0, "95%"],
        scaleX: [1, 1]
    });

    const [times, settimes] = useState([])
    const [duration, setduration] = useState(8)
    const [NormalTrip, setNormalTripe] = useState(true)
    const FirstLine = () => {
        setOptions({
            top: [-100, -60],
            left: ["95%", "95%"],
            scaleX: [-1, -1]
        })
        setduration(3)
    }
    const secondLine = () => {
        setOptions({
            top: [-60, 27],
            left: ["95%", "17%"],
            scaleX: [-1, -1]
        })
        setduration(8)
    }
    const ThirdLine = () => {
        setOptions({
            top: [27, -100],
            left: ["17%", 0],
            scaleX: [-1, -1]
        })
        setduration(3)
    }
    const FourthLine = () => {
        setOptions({
            top: [-100, -100],
            left: [0, "-200%"],
            scaleX: [-1, -1]
        })
        setduration(10)
    }

    const StartRandowmTrip = () => {
        setNormalTripe(false);
        StartTheRandowmTrip()
    }

    let t1, t2, t3, t4, t5;

    const CenterFuncts = () => {

        t1 = setTimeout(() => {
            FirstLine();
        }, 8000);


        t2 = setTimeout(() => {
            secondLine();
        }, 8000 + 11000);


        t3 = setTimeout(() => {
            ThirdLine();
        }, 8000 + 11000 + 11000);


        t4 = setTimeout(() => {
            FourthLine();
        }, 8000 + 11000 + 11000 + 4000);

        t5 = setTimeout(() => {
            StartRandowmTrip();
        }, 8000 + 11000 + 11000 + 4000 + 6000);

    }

    useEffect(() => {
        CenterFuncts();

        return () => {
            clearTimeout(t1)
            clearTimeout(t4)
            clearTimeout(t3)
            clearTimeout(t2)
            clearTimeout(t5)
        }
    }, [])
    // [0 ,"95%"  ,"95%"]

    return (
        <>
            {
                NormalTrip &&
                <motion.div

                    animate={Options}
                    // animate={
                    //     {
                    //         top: -37
                    //     }
                    // }

                    transition={{
                        duration,
                        ease: "easeInOut",
                        times,
                        repeatDelay: 4,
                        // repeat: Infinity

                    }}

                    //  style={{
                    //     top: Posi.top,
                    //     left: Posi.left,
                    //     transform: ` scaleX(${ScaleXVal})`
                    // }}
                    className='z-10  absolute w-fit '>
                    <Bee2 ref={BeeRef} />
                </motion.div>
            }
        </>
    )
}

export default BeeMovements
