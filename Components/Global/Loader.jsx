import React from 'react'

const Loader = ({ withBackground = true, width = 23, className, parentClassName, asWhite = false }) => {
    return withBackground
        ? <div className={`${parentClassName}  rounded w-full h-full absolute top-0 left-0 bg-foreground/5  flex items-center justify-center `}>
            <div className={`loader  border-t-foreground  border-t-[2px] ${className}`} style={{
                width: width,
                height: width,
            }}></div>
        </div>
        : <div className={`loader border-t-foreground  border-t-[2px] ${className}`} style={{
            width: width,
            height: width,
        }}></div>

}

export default Loader
