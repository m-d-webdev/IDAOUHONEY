import { CircleDashed, Quote } from 'lucide-react'
import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <div
            style={{
                filter: "drop-shadow(0 0 8px var(--filter-color))"
            }}
            className="bg-background h-[220] pb-10 md:min-w-[300] p-2 select-none flex flex-col items-center justify-start  gap-2 border border-foreground/10 rounded-2xl "
        >
            <div className="w-full">
                <div className="p-2  rounded-full  bg-gold w-fit h-fit">
                    <Quote className=" w-4 h-4 fill-white stroke-white drop-shadow-md  " />
                </div>
            </div>
            <h1 className="text-center mt-5  m-2 scrl_none overflow-auto">{review?.review}</h1>
            <div
                style={{
                    filter: "drop-shadow(0 0 8px var(--filter-color))"
                }}
                className="absolute bg-background  rounded-full flex items-center justify-center bottom-[-60] p-4 ">
                <CircleDashed
                    className="absolute text-gold  w-[110] stroke-[.5] h-[110] " />
                <img className="w-[75]  h-[75] object-cover rounded-full" src={review?.user?.image} alt="" />
                <h1 className="absolute bottom-[-40] font-semibold text-nowrap">{review?.user?.fullName}</h1>
            </div>

        </div>
    )
}

export default ReviewCard
