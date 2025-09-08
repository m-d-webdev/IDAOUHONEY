"use client";

import VerticalListCursorHover from "@/Components/Global/VerticalListCursorHover";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ProductsDropDopwn from "./ProductsDropDopwn";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ALink = ({ l }) => {
    const [isHovring, setHovring] = useState(false)
    return <>
        <Link
            onMouseEnter={() => setHovring(true)}
            onMouseLeave={() => setHovring(false)}
            className="font-normal z-10  text-sm tracking-tight flex items-center gap-2 group duration-100 hover:opacity-100  opacity-60 relative" href={l.link}
        >
            {l.name}


            {
                l.dropDown &&
                <ChevronDown className="h-[15px] w-[15px] group-hover:rotate-180 duration-300" />
            }

        </Link>


    </>
}


export const HeaderLinks = ({ toTop = false }) => {
    const { t } = useTranslation()
    const links = [
        {
            name: t("LINKS.HOME"),
            link: "/"
        },
        {
            name: t("LINKS.PRODDUCTS"),
            link: "/products",
            dropDown: "/products"
        },
        {
            name: t("LINKS.ME"),
            link: "/about-us",

        },

        {
            name: t("LINKS.CONTACT"),
            link: "/contact"
        },
    ]
    const [HovredElem, setHovredElem] = useState(null)

    return (
        <>
            <VerticalListCursorHover parentClassName="gap-5">
                {
                    links.map((l, i) =>
                        <Link
                            key={i}
                            onMouseEnter={() => setHovredElem(l.dropDown)}
                            onMouseLeave={() => setHovredElem(null)}
                            className="font-normal truncate  text-nowrap z-10  text-sm tracking-tight flex items-center gap-2 group duration-100 hover:opacity-100  opacity-60 relative" href={l.link}
                        >
                            {l.name}

                            {
                                l.dropDown &&
                                <ChevronDown className="h-[15px] w-[15px] group-hover:rotate-180 duration-300" />
                            }

                        </Link>

                    )
                }
            </VerticalListCursorHover>
            <>

                <AnimatePresence>
                    {
                        HovredElem &&

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: .9,
                                y: -16
                            }}
                            exit={{
                                opacity: 0,
                                scale: .9,
                                y: -16,
                                transition: {
                                    delay: .2
                                }
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    duration: .2,
                                    type: "keyframes"
                                }
                            }}
                            style={{
                                filter: "drop-shadow(0 0 2px var(--filter-color))"
                            }}
                            className={` p-4  rounded-md opacity-100 text-lg absolute bg-background  z-10  ${toTop ? "bottom-[30]" : "top-[60]"} `}>
                            {HovredElem == "/products" &&
                                <div
                                    onMouseEnter={() => setHovredElem("/products")}
                                    onMouseLeave={() => setHovredElem(null)}
                                >
                                    <ProductsDropDopwn />
                                </div>
                            }
                        </motion.div>

                    }
                </AnimatePresence>

            </>
        </>
    )
}

export default HeaderLinks
