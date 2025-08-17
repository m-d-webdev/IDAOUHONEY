import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/bee2.json"
const Bee2 = React.forwardRef(({ width = 70 }, ref) => {
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
                style={{
                    filter:"drop-shadow(0 0 1px var(--foreground))"
                }}
                width={width}
                height={width}
                isClickToPauseDisabled={true}
                ref={Ref}
            />
        </>
    )
})

export default Bee2
