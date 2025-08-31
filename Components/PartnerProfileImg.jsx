import BadgeCard from '@/Components/Global/BadgeCard'
import React from 'react'

const PartnerProfileImg = ({className="", src = "", fullName = "", description = "" }) => {
    return (
        <div className={`${className} py-10 px-4 relative flex flex-col items-center justify-center`}>
            <img className='w-50 h-50' src={src} alt="" />
            <BadgeCard className='' fullName={fullName} description={description}/>
        </div>
    )
}

export default PartnerProfileImg
