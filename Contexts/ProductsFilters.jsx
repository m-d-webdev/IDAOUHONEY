"use client";

import { GetCategories, GetHoneyColors } from "@/Api/Products";
import { Droplet, LayoutPanelLeft, Milk, PaintBucket } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"
const ProductsFiltersContext = createContext()


const ProductsFilters = ({ children }) => {
    const [Selects, setSelects] = useState({});
    const [Categories, setCategories] = useState([]);
    const [HoneyColors, setHoneyColors] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [secondFilterParams, setsecondFilterParams] = useState({});


    const HandelsetSelects = o => {
        if (Selects[o.name] && Selects[o.name]?.slug?.en == o.obj?.slug?.en) return
        setSelects(pv => ({ ...pv, [o.name]: o.obj }))
    }


    const handelFilterOptions = async () => {
        setLoadingCategories(true);

        const res = await GetCategories();
        setCategories(res.categories);

        const res2 = await GetHoneyColors()
        setHoneyColors(res2.Colors);

        setLoadingCategories(false)
    }

    useEffect(() => {
        handelFilterOptions();

    }, []);

    return (
        <ProductsFiltersContext value={{ Selects, HandelsetSelects, Categories, loadingCategories, HoneyColors, secondFilterParams, setsecondFilterParams }}>
            {children}
        </ProductsFiltersContext>
    )
}

export const UseProductsFilters = () => {

    const { Selects, loadingCategories, HoneyColors, HandelsetSelects: setSelects, Categories, secondFilterParams, setsecondFilterParams } = useContext(ProductsFiltersContext)

    return {
        Selects,
        setSelects,
        Categories,
        loadingCategories,
        secondFilterParams,
        setsecondFilterParams,
        HoneyColors
    }

}

export default ProductsFilters
