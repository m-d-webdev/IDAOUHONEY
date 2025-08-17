import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/bee.json"
const Bee = React.forwardRef(({ }, ref) => {
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
                width={50}
                height={50}
                isClickToPauseDisabled={true}
                ref={Ref}
            />
        </>
    )
})

export default Bee
