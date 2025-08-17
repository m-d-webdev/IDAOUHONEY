"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Link from "next/link";

const SearchSuggestions = ({ value }) => {
    return (
        <motion.div
            initial={{
                opacity: .6,
                scale: .9,
                y: -10
            }}
            exit={{
                opacity: 0,
                scale: .9,
                y: -10,
               
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    duration: .1,
                    type: "keyframes"
                }
            }}
            style={{
                filter: "drop-shadow(0 0 2px var(--filter-color))"
            }}
            className="p-2 md:w-full rounded-md opacity-100 text-lg absolute bg-background  flex flex-col gap-2 z-10 top-[43]">
            <div
                className="flex items-center  group justify-between font-medium text-base opacity-80 hover:opacity-100 duration-200   hover:bg-accent p-2"
            >
                <Link
                    href={`/search/${"axexample"}`}
                    className="flex items-center  gap-2">
                    <Search className="min-w-4 w-4 h-4" />
                    {value}
                </Link>
                <X className="min-w-4 w-4 h-4 opacity-0 group-hover:opacity-100" />
            </div>




        </motion.div>

    )
}

export default SearchSuggestions
