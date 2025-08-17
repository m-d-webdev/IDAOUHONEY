import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Animation from "./animations/Rating.json"
import GreatH1 from '../Global/GreatH1'
const UserRating = React.forwardRef(({ width = 400 }, ref) => {
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

export default UserRating
