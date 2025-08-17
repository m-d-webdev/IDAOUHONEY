"use client";

import GreatH1 from "@/Components/Global/GreatH1";
import { Heart, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const ratings = [
    {
        userId: "u123",
        userName: "Mustapha",
        stars: 5,
        comment: "Excellent service and fast delivery!",
        date: "2025-08-01",
    },
    {
        userId: "u456",
        userName: "Amina",
        stars: 5,
        comment: "Great quality, but packaging could be better.",
        date: "2025-07-28",
    },
    {
        userId: "u789",
        userName: "Youssef",
        stars: 1,
        comment: "It was okay, not what I expected.",
        date: "2025-07-25",
    },
    {
        userId: "u321",
        userName: "Sara",
        stars: 5,
        comment: "Amazing product! Will buy again.",
        date: "2025-07-20",
    },
    {
        userId: "u123",
        userName: "Mustapha",
        stars: 5,
        comment: "Excellent service and fast delivery!",
        date: "2025-08-01",
    },
    {
        userId: "u456",
        userName: "Amina",
        stars: 4,
        comment: "Great quality, but packaging could be better.",
        date: "2025-07-28",
    },
    {
        userId: "u789",
        userName: "Youssef",
        stars: 3,
        comment: "It was okay, not what I expected.",
        date: "2025-07-25",
    },
    {
        userId: "u321",
        userName: "Sara",
        stars: 1,
        comment: "Amazing product! Will buy again.",
        date: "2025-07-20",
    },
    {
        userId: "u123",
        userName: "Mustapha",
        stars: 5,
        comment: "Excellent service and fast delivery!",
        date: "2025-08-01",
    },
    {
        userId: "u456",
        userName: "Amina",
        stars: 2,
        comment: "Great quality, but packaging could be better.",
        date: "2025-07-28",
    },
    {
        userId: "u789",
        userName: "Youssef",
        stars: 3,
        comment: "It was okay, not what I expected.",
        date: "2025-07-25",
    },
    {
        userId: "u321",
        userName: "Sara",
        stars: 5,
        comment: "Amazing product! Will buy again.",
        date: "2025-07-20",
    },
];

import React from 'react'
import { numberWithSemicolons, ReduceNumberwithSomeCols } from "@/lib/utils";


const PersentageLine = ({
    starsNum,
    width,
    color = "",
    CountOfstart

}) => {
    return <div className="flex gap-3 items-center">
        <h2>{starsNum}</h2>
        <div className="w-[80%] h-[25] rounded-md overflow-hidden bg-foreground/10">
            <div
                style={{
                    width: `${width}% `,
                    background:color

                }}
                className={`h-full  `}></div>
        </div>
        <h2 className="text-nowrap w-[60] font-semibold tracking-tight text-lg">{ReduceNumberwithSomeCols(width)} %</h2>
        <h2 className="opacity-70">{ReduceNumberwithSomeCols(CountOfstart)}</h2>
    </div>
}
const ReviewsOverview = () => {

    const { t } = useTranslation();

    let TotalStars = (ratings.reduce((c, i) => c + i.stars, 0) / ratings.length)?.toString()
    TotalStars = TotalStars.substring(0, TotalStars.indexOf(".") + 2);

    const CountOf5start = ratings.filter(i => i.stars == 5).length;
    const CountOf4start = ratings.filter(i => i.stars == 4).length;
    const CountOf3start = ratings.filter(i => i.stars == 3).length;
    const CountOf2start = ratings.filter(i => i.stars == 2).length;
    const CountOf1start = ratings.filter(i => i.stars == 1).length;


    return (
        <div className="w-full  mt-8 min-h-[80lvh] flex items-center justify-center ">
            <div style={{ filter: "drop-shadow(0  0 1px var(--filter-color))" }} className="max-w-[1000] border border-foreground/10 rounded-md  w-full flex flex-col  bg-background p-8 gap-5">


                <h1 className="text-[25px] font-semibold tracking-tighter">{t("TESTIMONIALS.CUTTOMER_REVIEWS")}</h1>

                <div className="flex mt-8 gap-4 items-end">

                    <GreatH1 className={"text-6xl !from-[#030040] "}>{TotalStars?.toString()?.replace(".", ",")}</GreatH1>
                    <div className="flex gp-1 items-center">

                        {
                            Array(parseInt(TotalStars?.toString()?.split(".")[0]))?.fill()?.map((m, i) => <Heart className="fill-[#66DA81] !min-w-[30] min-h-[30] stroke-none" key={i} />)
                        }
                        <div className="relative  flex w-[30] h-[30]  items-center justify-center">
                            <Heart className="fill-[#66DA81] !min-w-[30] min-h-[30] stroke-none" />
                            <div
                                style={{
                                    left: `${parseFloat(TotalStars?.toString()?.replace(/^(\d)/, '0')) * 100}%`
                                }}
                                className="!h-full overflow-hidden absolute top-0   bg-background !w-full ">
                                <Heart
                                    style={{
                                        left: `-${parseFloat(TotalStars?.toString()?.replace(/^(\d)/, '0')) * 108}%`
                                    }}
                                    className="fill-foreground/15 absolute top-[-1]  !min-w-[31] min-h-[31] stroke-none" />
                            </div>
                        </div>
                    </div>
                    <p>
                        {numberWithSemicolons(ratings.length)} {t("TESTIMONIALS.REVIEWS")}
                    </p>

                </div>


                <div className="flex flex-col gap-2 w-full p-4">
                    <PersentageLine
                        CountOfstart={CountOf5start}
                        starsNum={5}
                        width={(CountOf5start / ratings.length) * 100}
                        color="#66DA81"

                    />
                    <PersentageLine
                        CountOfstart={CountOf4start}
                        starsNum={4}
                        width={(CountOf4start / ratings.length) * 100}
                        color="#C6E875"

                    />
                    <PersentageLine
                        CountOfstart={CountOf3start}
                        starsNum={3}
                        width={(CountOf3start / ratings.length) * 100}
                        color="#F9D264"

                    />
                    <PersentageLine
                        CountOfstart={CountOf2start}
                        starsNum={2}
                        width={(CountOf2start / ratings.length) * 100}
                        color="#F5B64C"

                    />
                    <PersentageLine
                        CountOfstart={CountOf1start}
                        starsNum={1}
                        width={(CountOf1start / ratings.length) * 100}
                        color="#F97352"

                    />
                </div>
            </div>
        </div>
    )
}

export default ReviewsOverview
