"use client"

import GreatH1 from "../Global/GreatH1"

const WhyChooseItem = ({ title, description, src }) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <img src={src} className="w-[150]" alt="" />
            <div className="mt-6">
                <h1 className="font-medium text-xl tracking-tight">{title}</h1>
                <p className="opacity-70 max-w-[300]">
                    {description}
                </p>
            </div>
        </div>
    )
}

const WhyChooseUsPart = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center-safe justify-center">
                <GreatH1 className={"!text-3xl"}>Why Choose Our Honey?</GreatH1>
                <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>

            </div>

            <div className="flex mt-20 gap-4 flex-wrap justify-evenly w-full max-w-[1200]">

                <WhyChooseItem
                    title={"Pure & Natural"}
                    description={"Our honey is 100% pure, raw, and free from additives, ensuring you taste nature in its most authentic form."}
                    src={"/media/hand-drawn-honey-jar-drawing-illustration.png"}
                />
                <WhyChooseItem
                    title={"From Hive to Jar"}
                    src={"/media/49673135_9294213-removebg-preview.png"}
                    description={"We carefully harvest and package our honey directly from local beekeepers, preserving freshness and quality."}
                />
                <WhyChooseItem
                    title={"Passion & Care"}
                    description={"Every jar is produced with dedication and respect for nature, bees, and our valued customers."}
                    src={"/media/24122309_bwink_ppl_08_single_06-removebg-preview.png"}
                />
            </div>

        </div>
    )
}

export default WhyChooseUsPart
