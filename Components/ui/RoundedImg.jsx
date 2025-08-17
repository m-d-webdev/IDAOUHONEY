import React from 'react'

const RoundedImg = ({ src, className  ,...props}) => {
    return (
        <img  src={src} className={`${className} w-[40] h-[40] rounded-full object-cover object-top`} {...props} />
    )
}

export default RoundedImg
