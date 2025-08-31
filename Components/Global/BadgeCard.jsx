import React from 'react'
import GreatH1 from './GreatH1'

const BadgeCard = ({ className = "", fullName = "", description = "" }) => {
    return (
        <div className={`${className} h-[150]  w-[200] flex flex-col items-center  relative  `}>
            <img
                style={{
                    filter: `drop-shadow(0px 0px 4px var(--filter-color))`
                }}
                className='  absolute    h-full w-full  object-cover object-top'
                src="/media/icons/BadgeCard.png" alt="" />
          
            <div className="h-[55] "></div>

            <div className="relative flex flex-col items-center justify-center  text-black  w-full  z-[2]">
                <h1 className='px-3   font-semibold tracking-tight '>M. {fullName} </h1>
                <h1 className='px-1 text-center text-sm mt-1 opacity-70 font-medium tracking-tight '>{description} </h1>
            </div>

        </div>
    )
}

export default BadgeCard
