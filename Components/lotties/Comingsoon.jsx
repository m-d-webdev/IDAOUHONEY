"use client";

import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/coming soon.json"
const Comingsoon = React.forwardRef(({ width = 200 }, ref) => {
    const Ref = ref ? ref : useRef()
    return (
        <>

            <Lottie
                options={{
                    animationData: Animation,
                    autoplay: true,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                    },
                }}
                width={width}
                height={100}
                isClickToPauseDisabled={true}
                ref={Ref}
            />
        </>
    )
})

export default Comingsoon
