"use client";

import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/Maintenance web.json"
const Consultation = React.forwardRef(({ width = 400 }, ref) => {
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
                height={250}
                isClickToPauseDisabled={true}
                ref={Ref}
            />
        </>
    )
})

export default Consultation
