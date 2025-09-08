"use client"

import { Button } from "@/Components/ui/button"
import { EllipsisVertical, MoveUpRight, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { SliceText } from "@/lib/utils"
const MoreOptinsList = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <div className="absolute right-0 top-0">
            <Button className={"border-none cursor-pointer hover:bg-background p-1"} >
                <EllipsisVertical />
            </Button>


            {
                menuOpen &&
                <motion.div
                    style={{
                        filter: `drop-shadow(0 0 4px var(--filter-color))`
                    }}
                    className="absolute top-0 right-0 bg-background p-2 "
                >
                    <div className="flex items-center "></div>
                </motion.div>
            }
        </div>
    )
}

const ProductCard = ({ className = "", item_data }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language ?? "en";
    return (
        <div
            style={{
                // filter: `drop-shadow(0 0 2px var(--filter-color))`
            }}
            className={`${className} hover:border-foreground/30 duration-150 p-3 mb-3 rounded-md  bg-background border border-foreground/10 flex flex-col justify-between relative `}>
            {/* <MoreOptinsList /> */}
            <div className="w-full flex items-center animated-loading-color/40 border border-foreground/10 rounded-2xl justify-center h-full max-h-[330]">
                <img src={item_data.images[0]} className="max-w-full rounded-md max-h-full object-cover" alt="" />
            </div>
            <h1 className="font-bold mt-3 text-lg tracking-tighter">{item_data.name[lang]}</h1>
            <SliceText
                className="text-sm tracking-tight opacity-90 max-w-[350]"
                text={item_data.description[lang]}
                maxLength={90}
            />
            <div className="p-2 px-4 flex gap-5 items-end">
                <h1 className="text-xl tracking-[-2] font-semibold text-nowrap">{item_data.price} MAD</h1>
                <p className="text-xs opacity-90 font-medium">Free delivery</p>
            </div>
            <div className="w-full  flex justify-evenly items-center mt-4">
                <Button className={"tracking-tighter w-[50%] !py-5 "}>
                    Add to cart
                    <ShoppingCart />
                </Button>
                <Button className={"tracking-tighter w-[40%] !py-3 "}>
                    Buy now
                    <div className="p-1 rounded-full bg-foreground">

                        <MoveUpRight className="text-background" />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export const LoadinProductCard = ({ className = "" }) => {
    return (
        <div
            style={{
                // filter: `drop-shadow(0 0 2px var(--filter-color))`
            }}
            className={`${className} p-2  flex flex-col gap-1 mb-3 rounded-md  bg-background border border-foreground/10  relative `}>
            {/* <MoreOptinsList /> */}
            <div className="w-full flex  animated-loading-color rounded-md items-center justify-center h-[250]">
                <img className="max-w-full  rounded-md max-h-full object-cover" alt="" />
            </div>
            <h1 className="font-bold mt-3 text-lg tracking-tighter w-[200] h-[20] rounded-md animated-loading-color"></h1>
            <p className="text-sm tracking-tight opacity-90 w-full max-w-[350] h-[12] rounded-md animated-loading-color"></p>
            <p className="text-sm tracking-tight opacity-90 w-full max-w-[300] h-[12] rounded-md animated-loading-color"></p>
            <p className="text-sm tracking-tight opacity-90 w-full max-w-[250] h-[12] rounded-md animated-loading-color"></p>
            <div className="p-2 px-4 flex gap-2 items-end">
                <h1 className="text-xl tracking-[-2] rounded-md font-semibold text-nowrap w-[120] h-[25] animated-loading-color"></h1>
                <p className="text-xs opacity-90 font-medium rounded-md w-[90] h-[10] animated-loading-color"></p>
            </div>
            <div className="w-full  flex justify-evenly items-center mt-4">
                <Button className={"tracking-tighter w-[50%] !py-5 "}>
                    <p className="text-sm  tracking-tight opacity-90 w-[100] h-[18] rounded-sm animated-loading-color"></p>
                    <p className="text-sm tracking-tight opacity-90 w-[30] h-[18] rounded-sm animated-loading-color"></p>
                </Button>
                <Button className={"tracking-tighter w-[40%] !py-3 "}>
                    <p className="text-sm tracking-tight opacity-90 w-[100] h-[18] rounded-sm animated-loading-color"></p>
                    <p className="text-sm tracking-tight opacity-90 w-[30] h-[18] rounded-sm animated-loading-color"></p>
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
