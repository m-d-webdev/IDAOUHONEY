"use client";

import { Button } from "@/Components/ui/button";
import RoundedImg from "@/Components/ui/RoundedImg";
import { useTranslation } from "react-i18next";

const MainhoneyReviews = [
    {
        stars: 4,
        id: 1,
        user: {
            image: "https://i.pinimg.com/1200x/6c/66/a1/6c66a10f4f979874d9ca1a3c812007ed.jpg",
            fullName: "Amina El Fassi",
        },
        review: "This honey tastes amazing! Very natural and not too sweet. Perfect for my morning tea.",
    },
    {
        stars: 5,
        id: 2,
        user: {
            image: "https://i.pinimg.com/736x/0a/f4/76/0af4764ecc5d42862557f80aaf5ea8f3.jpg",
            fullName: "Youssef Amrani",
        },
        review: "Best honey I’ve ever tasted. Pure, smooth, and great for baking too.",
    },
    {
        stars: 3,
        id: 3,
        user: {
            image: "https://i.pinimg.com/736x/1d/87/18/1d8718b2f9515bf9b45ef2c3bae6f7ba.jpg",
            fullName: "Lamiaa Idrissi",
        },
        review: "It’s good, but a bit too thick for my liking. Still very flavorful.",
    },
    {
        stars: 5,
        id: 4,
        user: {
            image: "https://i.pinimg.com/736x/31/38/09/313809c75c9f7315fb42ff70f72f0099.jpg",
            fullName: "Karim Bennis",
        },
        review: "Very high quality. I use it every morning with warm water and lemon.",
    },
    {
        stars: 4,
        id: 5,
        user: {
            image: "https://i.pinimg.com/736x/f4/ba/f2/f4baf2858faedcf1de5d0a7389dc0337.jpg",
            fullName: "Nadia Tazi",
        },
        review: "Love the packaging and the taste. I feel it's genuinely natural.",
    },
    {
        stars: 2,
        id: 6,
        user: {
            image: "https://i.pinimg.com/736x/b4/3a/89/b43a892e3f68c50a5b7ce996aa41a1af.jpg",
            fullName: "Reda El Alaoui",
        },
        review: "Too expensive for the quantity. I expected a bit more.",
    },
    {
        stars: 5,
        id: 7,
        user: {
            image: "https://i.pinimg.com/1200x/6c/66/a1/6c66a10f4f979874d9ca1a3c812007ed.jpg",
            fullName: "Sofia Bouzid",
        },
        review: "Absolutely delicious! My kids love it on pancakes.",
    },
    {
        stars: 4,
        id: 8,
        user: {
            image: "https://i.pinimg.com/736x/0a/f4/76/0af4764ecc5d42862557f80aaf5ea8f3.jpg",
            fullName: "Omar Zerouali",
        },
        review: "You can really taste the difference with commercial honey. This one is legit.",
    },
    {
        stars: 3,
        id: 9,
        user: {
            image: "https://i.pinimg.com/736x/1d/87/18/1d8718b2f9515bf9b45ef2c3bae6f7ba.jpg",
            fullName: "Fatima Zahra Amine",
        },
        review: "It’s okay, but I found a few crystals at the bottom. Maybe just old stock?",
    },
    {
        stars: 5,
        id: 10,
        user: {
            image: "https://i.pinimg.com/736x/31/38/09/313809c75c9f7315fb42ff70f72f0099.jpg",
            fullName: "Ayoub Sebti",
        },
        review: "This is my second order. Totally worth it. Smooth and authentic.",
    },
];

const ReviewCard2 = ({ review }) => {
    return (
        <div
            style={{
                filter: " drop-shadow(0 0px  4px var(--filter-color))"
            }}
            className="w-full mt-8 border border-foreground/15  p-4 bg-background relative rounded-2xl " >

            {/* <div className="flex gap-2 mb-6 "> */}
            <RoundedImg src={review.user?.image} className={"absolute top-[-30] w-[60] h-[60]"} />
            {/* </div> */}
            <p className="m-2 mt-8 tracking-tight">{review.review}</p>
            <h1 className="text-sm mt-4 font-semibold tracking-tight">{review.user?.fullName}</h1>

        </div>
    )
}

const ListReviews = () => {
    const {t} = useTranslation()
    return (
        <div className="flex w-full mt-10  min-h-screen items-center justify-center">
            <div className="max-w-[1000] border border-foreground/5 p-4 rounded-xl flex flex-col items-center justify-center">

                <div className=" grid grid-cols-1 w-full sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        MainhoneyReviews.map((r, i) => <ReviewCard2 key={i} review={r} />)
                    }
                </div>
                <Button className={"rounded-2xl mt-8 px-8"}>{t("COMMON.SEEMORE")}</Button>
            </div>

        </div>
    )
}

export default ListReviews
