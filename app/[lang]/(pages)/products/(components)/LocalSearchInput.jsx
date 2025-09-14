"use client";

import { Input2 } from "@/Components/ui/input2";
import { UseProductsFilters } from "@/Contexts/ProductsFilters";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const LocalSearchInput = () => {
    const { setsecondFilterParams, loadingCategories } = UseProductsFilters();
    const [value, setValue] = useState("")

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (value.length >= 2) {
                setsecondFilterParams(pv => ({ ...pv, name: value }))
            } else {
                setsecondFilterParams(pv => ({ ...pv, name: "" }))
            }
        }, 300)
        return () => {
            clearTimeout(timeOut)
        }
    }, [value])
    return (

        <>
            {
                loadingCategories
                    ? <div className="md:w-[400] gap-2 flex items-center border border-border rounded p-2  ">
                        <div className="w-[20] h-[20] rounded animated-loading-color"></div>
                        <div className="w-[40%] h-[15] rounded animated-loading-color"></div>
                    </div>
                    : <Input2 onChange={e => setValue(e.target.value)} icon={<Search className="w-5 h-5" />} parentClassName="py-1 !max-w-[400] rounded-2xl  !bg-accent/40" className={"!bg-transparent"} placeholder="Search for products ... " />
            }
        </>
    )
}

export default LocalSearchInput
