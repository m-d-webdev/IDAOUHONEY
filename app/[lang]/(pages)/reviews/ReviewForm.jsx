"use client";
import GreatH1 from '@/Components/Global/GreatH1';
import UserRating from '@/Components/lotties/UserRating'
import { ChevronRight, Send, Star } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion"
import { Star2 } from '@/Components/ui/icons';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { useTranslation } from 'react-i18next';
const SetStars = ({ value, setValue, k }) => {
    return (
        <div className="flex mx-6 border border-foreground/10 p-2 w-fit px-10 rounded-xl items-center gap-2">
            {
                Array(5).fill().map((m, i) =>
                    <motion.div
                        key={`${k},${i},${value}`}
                        animate={i < value ?
                            { opacity: [0, .5, 1], x: [-50, 0, 0], scale: [0, 3.5, 1] } :
                            {}
                        }
                        transition={{ duration: .5, delay: i * .08, }}
                        className="">

                        <Star2 className={` drop-shadow-sm drop-shadow-yellow-300 cursor-pointer ${i < value ? "fill-yellow-300 stroke-none" : "!fill-none"} w-8 h-8 stroke-foreground/15`} onClick={() => setValue(i + 1)} />
                    </motion.div>
                )
            }
        </div>
    )
}

const ReviewForm = ({ withLottie = true }) => {
    const [Globalstars, setGlobalstars] = useState({
        Product: 1,
        Overall_Experience: 1,
        Website_Design: 1,
        Delivery: 1,
    });
    const { t } = useTranslation()
    const [Comment, setComment] = useState("")
    return (
        <div className='min-h-screen mt-20 relative flex flex-col items-start w-full max-w-[1200] px-4 justify-center'>
            <GreatH1 className={"text-[26px] "}>
                {t("TESTIMONIALS.SHAREWITHUS")}
            </GreatH1>
            <div className="w-full mt-6 flex-col md:flex-row justify-evenly flex xl:gap-20 items-center">

                <div className="flex flex-col items-center justify-center">
                    <UserRating />
                    <p className='font-medium mt-2 max-w-[400] text-center text-lg opacity-80 tracking-tight'>{t("TESTIMONIALS.SHARE_SUBTITLE")}</p>
                </div>

                <div style={{
                    filter: `drop-shadow(0 0 1px var(--filter-color))`
                }}
                 className="flex  bg-background  p-6 rounded-xl  flex-col gap-6 md:w-[50%] w-full">

                    <div className=" w-full">
                        <h2 className='opacity-80  tracking-tight font-semibold text-lg flex items-center' ><ChevronRight className='rtl:rotate-180  opacity-60' /> {t("TESTIMONIALS.rate_our_product")}</h2>
                        <SetStars k={8408} value={Globalstars.Product} setValue={(v) => setGlobalstars(pv => ({ ...pv, Product: v }))} />
                    </div>

                    <div className="">
                        <h2 className='opacity-80  tracking-tight font-semibold text-lg flex items-center' ><ChevronRight className='rtl:rotate-180  opacity-60' /> {t("TESTIMONIALS.overall_experience")}</h2>
                        <SetStars k={9861} value={Globalstars.Overall_Experience} setValue={(v) => setGlobalstars(pv => ({ ...pv, Overall_Experience: v }))} />
                    </div>
                    <div className="">
                        <h2 className='opacity-80  tracking-tight font-semibold text-lg flex items-center' ><ChevronRight className='rtl:rotate-180  opacity-60' /> {t("TESTIMONIALS.website_design_ease_of_use")}</h2>
                        <SetStars k={9878} value={Globalstars.Website_Design} setValue={(v) => setGlobalstars(pv => ({ ...pv, Website_Design: v }))} />
                    </div>
                    <div className="">
                        <h2 className='opacity-80  tracking-tight font-semibold text-lg flex items-center' ><ChevronRight className='rtl:rotate-180  opacity-60' /> {t("TESTIMONIALS.delivery_service_satisfaction")}</h2>
                        <SetStars k={2135} value={Globalstars.Delivery} setValue={(v) => setGlobalstars(pv => ({ ...pv, Delivery: v }))} />
                    </div>
                    <div className="">
                        <h2 className='opacity-80  tracking-tight font-semibold text-lg flex items-center' ><ChevronRight className='rtl:rotate-180  opacity-60' /> {t("TESTIMONIALS.your_comment")}</h2>
                        <Textarea
                            parentClassName='mx-6'
                            label=''
                        />
                    </div>
                    <div className="w-full flex mt-8 items-center justify-center">
                        <Button variant={"dark"} className={"w-[200]"}>
                            {t("LOGIN.submit")}
                            <Send />
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ReviewForm
