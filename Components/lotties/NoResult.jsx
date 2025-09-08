import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/Man opening gift box and surprise with bee fly.json"
const NoResult = React.forwardRef(({ width = 200 }, ref) => {
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
                height={width}
                isClickToPauseDisabled={true}
                ref={Ref}
            />
        </>
    )
})

export default NoResult
