"use client"
import { useTranslation } from "react-i18next";
import Slider, { SlidermoveTo } from "../Global/SliderElems"
import { ChevronLeft, ChevronRight, CircleDashed, DecimalsArrowRight, Quote } from "lucide-react"
import GreatH1 from "../Global/GreatH1";
import { Button } from "../ui/button";
import ReviewCard from "../ReviewCard";
import Link from "next/link";

const honeyReviews = [
    {
        fullName: "Amina El Fassi",
        review: "This honey tastes amazing! Very natural and not too sweet. Perfect for my morning tea."
    },
    {
        fullName: "Youssef Benali",
        review: "The best honey I’ve tried so far. I love that it's locally produced and 100% pure."
    },
    {
        fullName: "Fatima Zahra Amrani",
        review: "Arrived quickly and well-packaged. The texture and flavor are just perfect. Highly recommended!"
    },
    {
        fullName: "Hassan El Idrissi",
        review: "Excellent product! You can tell it’s real and unprocessed. I’ll definitely order again."
    },
    {
        fullName: "Sara Oulhaj",
        review: "Great quality honey. I use it for skincare too, and it works wonders. Will buy more soon."
    },
    {
        fullName: "Karim Bouzid",
        review: "This honey reminded me of the one my grandmother used to bring from the countryside. Authentic and delicious."
    },
    {
        fullName: "Leila Bennis",
        review: "Love the packaging and the taste! It’s rich, golden, and smells like real flowers. Thank you!"
    },
    {
        fullName: "Omar Messaoudi",
        review: "Very satisfied with my order. I use it daily and feel the difference in energy. Highly recommend this shop!"
    }
];

const Reviews = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full border border-foreground/5 h-screen mt-20 flex flex-col items-center justify-center">
            <GreatH1>
                {t("CONTACT.WHATCLIENTSAY")}
            </GreatH1>
            <div dir="ltr" className="flex gap-5 w-full items-center mt-8 justify-center">
                <button className="hover2 hover:bg-accent p-2 rounded-full border  cursor-pointer border-foreground/10">

                    <ChevronLeft onClick={() => SlidermoveTo('left')} className=" cursor-pointer" />
                </button>
                <div className="max-w-[80%] mt-10 pb-[140] overflow-hidden">

                    <Slider className="items-start" childWidth={300}>
                        {
                            honeyReviews
                                .map(r => ({ review: r.review, user: { fullName: r.fullName, image: "https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg" } }))
                                .map((review, i) =>
                                    <ReviewCard key={i} review={review} />
                                )
                        }
                    </Slider>
                </div>
                <button className="hover2 hover:bg-accent p-2 rounded-full border  cursor-pointer border-foreground/10">

                    <ChevronRight onClick={() => SlidermoveTo('right')} className="" />
                </button>
            </div>
            <Link href={"/reviews"}>
            <Button size={""} variant={"default"} className={"!px-8 mt-10 hover2 rounded-full "}>{t("COMMON.SEEMORE")} <DecimalsArrowRight /> </Button>
            </Link>
        </div>
    )
}

export default Reviews
