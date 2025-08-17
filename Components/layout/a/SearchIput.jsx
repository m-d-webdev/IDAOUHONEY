"use client";
import { Button } from '@/Components/ui/button';
import { Input2 } from '@/Components/ui/input2'
import { Search } from 'lucide-react';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import SearchSuggestions from './SearchSuggestions';
import { AnimatePresence, motion } from "framer-motion";

const SearchInput = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("")
    return (
        <div className={`relative  border xl:w-[400]  bg-accent flex justify-center items-center gap-1  border-border p-1 px-2 rounded-md  duration-500 ${value != "" ? "" : ""}`}>

            <Search className='w-4 h-4' />
            <Input2
                onChange={e => setValue(e.target.value)} value={value?.trimStart()} placeholder={t("COMMON.SEARCHPLACEHOLDER")}
                className={"border-none w-full   py-0 shadow-none"}
                type={"search"}
            />
            <AnimatePresence>
                {
                    value != "" &&
                    <SearchSuggestions value={value} />
                }
            </AnimatePresence>
        </div>
    )
}

export default SearchInput
