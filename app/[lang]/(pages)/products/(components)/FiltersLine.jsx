"use client"

import { Button } from "@/Components/ui/button";
import { UseProductsFilters } from "@/Contexts/ProductsFilters"
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FiltersLine = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language
    const { Data, Selects, setSelects } = UseProductsFilters();
    const [FilteredSlects, setFilteredSlects] = useState([]);

    useEffect(() => {
        setFilteredSlects([])
        Object.entries(Selects).map(([key, value]) => (value.slug && value.slug['en'] != "all")
            ? setFilteredSlects(pv => [...pv, { name: key, value }])
            : null
        )

    }, [Selects]);
    const HandleUnSetFilter = (name) => {
        setSelects({ name, obj: { slug: { en: "all", fr: "tout", ar: "الكل" } } })
    }
    const HandleUnSetAll = () => {
        FilteredSlects.map(i => {
            setSelects({ name: i.name, obj: { slug: { en: "all", fr: "tout", ar: "الكل" } } })
        })
    }

    return (
        <div className="flex items-center gap-2">
            {
                FilteredSlects.map(i =>
                    <Button onClick={() => HandleUnSetFilter(i.name)} className={"font-semibold cursor-pointer hover:bg-red-300/20 hover:opacity-100 opacity-70 tracking-tight"}>
                        {i.value.name[lang]}

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#6C6C6C" />
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 9L9 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 9L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Button>
                )
            }
            {
                FilteredSlects.length > 0 &&
                <h2 onClick={HandleUnSetAll} className="font-semibold cursor-pointer tracking-tight text-xs opacity-70 hover:opacity-100 text-[#FF7D4E]">Clear all filters</h2>
            }
        </div>
    )
}

export default FiltersLine
