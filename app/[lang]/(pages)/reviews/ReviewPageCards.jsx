"use client";
import GreatH1 from "@/Components/Global/GreatH1";
import Reviews from "@/Components/Landing/Reviews";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { Star2 } from "@/Components/ui/icons";
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

const Areview = ({ review, className, style }) => {
    return (
        <div style={{
            filter: "drop-shadow(10px 0px   6px var(--filter-color))",
            ...style
        }}

            className={`${className} p-4 md:h-[230] items-start justify-center gap-4 flex flex-col  w-[300]  bg-background border  rounded-xl`}>
            <div className="w-full">
                <div className="p-2  rounded-full  bg-gold w-fit h-fit">
                    <Quote className=" w-4 h-4  stroke-white drop-shadow-md  " />
                </div>
            </div>
            <h1 className="font-semibold  max-h-[60%] scrl_none text-sm p-3 overflow-auto">
                {
                    review.review
                }
            </h1>
            <div className="flex gap-2">
                <img src={review.user?.image} className="w-[40] object-top h-[40] rounded-full object-cover F" alt="" />
                <h1 className="font-semibold tracking-tighter ">{review.user?.fullName}</h1>
            </div>
        </div>
    )
};


const AreviewAnimated = ({ AnimateFromRight, i, review, className, style }) => {
    return (
        <motion.div
            key={review.id}
            initial={
                AnimateFromRight ?

                    {
                        opacity: 1,
                        x: 0
                    }

                    : {
                        opacity: 0,
                        x: -600
                    }
            }
            animate={
                AnimateFromRight ?
                    {
                        opacity: 0,
                        x: -600
                    }

                    : {
                        opacity: 1,
                        x: 0
                    }
            }
            transition={{
                duration: .6
            }}
            style={{
                zIndex: i,
                filter: "drop-shadow(10px 0px   6px var(--filter-color))",
                ...style
            }}

            className={`${className} p-4 h-[230] gap-4 flex flex-col   w-[300]  z-[3] bg-background  absolute left-0 bottom-0 border  rounded-xl`}>

            <div className="w-full">
                <div className="p-2  rounded-full  bg-gold w-fit h-fit">
                    <Quote className=" w-4 h-4  stroke-white drop-shadow-md  " />
                </div>
            </div>

            <h1 className="font-semibold max-[230] scrl_none text-sm p-3">
                {
                    review.review
                }
            </h1>

            <div className="flex gap-2">
                <img src={review.user?.image} className="w-[40] object-top h-[40] rounded-full object-cover F" alt="" />
                <h1 className="font-semibold tracking-tighter ">{review.user?.fullName}</h1>
            </div>
        </motion.div>
    )
}

const ReviewPageCards = () => {
    const { t } = useTranslation()
    const [AnimateFromRight, setAnimatetoRight] = useState(false)
    const [selectedReview, setSelectedReview] = useState(
        {
            index: 0,
            ...MainhoneyReviews[0]
        }
    )

    const [lastChangedElem, setlastChangedElem] = useState(selectedReview)
    const [RestOfReviews, setRestOfReviews] = useState([])

    useEffect(() => {

        setRestOfReviews(MainhoneyReviews.filter((m, i) => i > selectedReview.index && i <= selectedReview.index + 3))

    }, [selectedReview])

    const handleChangeSelectedCard = (toRight = true) => {
        setlastChangedElem(selectedReview)
        setAnimatetoRight(toRight);

        if (toRight) {
            setSelectedReview(pv => {
                let oldIndex = MainhoneyReviews.findIndex(i => i.id == pv.id)
                return MainhoneyReviews[oldIndex + 1]
                    ? {
                        index: oldIndex + 1
                        , ...MainhoneyReviews[oldIndex + 1]
                    }
                    : pv
            })
            return
        };


        setSelectedReview(pv => {
            let oldIndex = MainhoneyReviews.findIndex(i => i.id == pv.id)
            return MainhoneyReviews[oldIndex - 1]
                ? {
                    index: oldIndex - 1
                    , ...MainhoneyReviews[oldIndex - 1]
                }
                : pv
        })

    }


    const SelectedReviewContainer = () =>
        <div dir="ltr" className="flex gap-8  items-center">

            <button disabled={selectedReview.index == 0} onClick={() => handleChangeSelectedCard(false)} className={` ${selectedReview.index > 0 ? "opacity-30 hover:opacity-100 " : "opacity-0"}   !z-[5]  hover:bg-accent p-2 rounded-full border  cursor-pointer border-foreground/10`}>
                <ChevronLeft className=" cursor-pointer" />
            </button>


            <div className="p-6  z-[2]  md:w-[400] border  border-foreground/5s  rounded-2xl  flex flex-col items-center  justify-center">
                {/* Image ----------------------------- */}
                <motion.div
                    key={selectedReview.id}
                    animate={{
                        opacity: [0, 1],
                        y: [20, 0],
                    }}
                    transition={{
                        duration: .4,
                        ease: "easeOut",
                    }}

                    className="p-1  border-l-2 bg-background border-r-2 border-gold  rounded-full">
                    <img src={selectedReview.user?.image} className=" object-top w-[80] h-[80] object-cover rounded-full" alt="" />
                </motion.div>
                <motion.h1
                    key={selectedReview.id}
                    animate={{
                        opacity: [0, 1],
                        y: [20, 0],
                    }}
                    transition={{
                        duration: .4,
                        ease: "easeOut",
                        delay: .1
                    }}
                    className="text-lg  font-medium mt-10 text-center tracking-tight">
                    {selectedReview.review}
                </motion.h1>

                {/* Stars ----------------------- */}
                <div

                    className="flex gap-1 mt-6">
                    {
                        Array(selectedReview.stars).fill().map((c, i) =>

                            <motion.div

                                key={Math.random() * 123}



                                animate={{
                                    opacity: [0, .5, 1], x: [-50, 0, 0], scale: [0, 3.5, 1]
                                }}
                                transition={{ duration: .5, delay: i * .08, }}

                                className="">

                                <Star2 style={{
                                    filter: "drop-shadow(0 0px 4px yellow)"
                                }}
                                    className=" w-5 h-5  fill-yellow-300" />
                            </motion.div>

                        )
                    }
                </div>

                <motion.h1
                    key={selectedReview.id}
                    animate={{
                        opacity: [0, 1],
                        y: [10, 0],
                    }}
                    transition={{
                        duration: .4,
                        ease: "easeOut",
                        delay: .3
                    }}
                    className={"mt-5 font-semibold opacity-70 text-[20px] tracking-tighter"}>{selectedReview.user?.fullName}</motion.h1>
            </div>



            <button onClick={handleChangeSelectedCard} className={` hover:bg-accent p-2 rounded-full border !z-[5]  cursor-pointer border-foreground/10 ${selectedReview.index < MainhoneyReviews.length - 1 ? "opacity-30 hover:opacity-100" : "opacity-0 "}`}>
                <ChevronRight />
            </button>

        </div>

    return (
        <div className="w-full  flex-col  relative flex items-center max-w-[1300] justify-center">
            <div
                style={{
                    filter: "drop-shadow(0 -20px   50px yellow)"
                }}
                className="absolute  w-[40%] rounded-full bg-[yellow] top-[130] h-[200]"></div>

            <div className="h-[150]  w-full"></div>


            <div
                style={{ filter: "drop-shadow(0 3px 2px var(--filter-color))" }}
                dir="ltr"
                className="bg-background  p-6  flex flex-col items-center justify-between  relative  min-h-[600] rounded-md w-full"
            >
                <div className="w-full">

                    <GreatH1>
                        {t("TESTIMONIALS.TOP_TESTIMONIALS")}
                    </GreatH1>
                </div>
                <div className="absolute top-0 left-0 overflow-hidden h-[400] w-[600]">
                    {/* <div className="absolute w-[600] z-[0] rounded-b-[100%] top-[-150%] left-0 h-[800] bg-yellow-100"></div> */}
                    <div className="absolute bg-gradient-to-b w-[600] z-[0] top-[-40%] rounded-br-[100%] left-0 h-[500] from-yellow-100 to-transparent"></div>
                </div>

                <div className="w-full   flex  justify-evenly items-center">

                    <SelectedReviewContainer />


                    <div className="flex    md:w-[35%] relative  p-1  h-[250] mx-8 items-end justify-end">
                        <AreviewAnimated
                            i={4}
                            AnimateFromRight={AnimateFromRight}
                            className={`absolute  py-6  `}
                            review={lastChangedElem}
                        />

                        {
                            RestOfReviews
                                .map((r, i) =>
                                    <Areview
                                        style={{
                                            zIndex: (RestOfReviews.length - i),
                                            scale: 1 - (i / (RestOfReviews.length - 1)) * 0.5,
                                            left: `${i * 100}px`,
                                            bottom: `-${i * 30}px`

                                        }}
                                        className={`${(!AnimateFromRight && i == 0) ? "opacity-0" : ""} duration-300 absolute  py-6  `}
                                        key={i}
                                        i={i}
                                        review={r} />
                                )
                        }
                    </div>

                </div>
                <div className=""></div>
            </div>
        </div >
    )
}

export default ReviewPageCards
