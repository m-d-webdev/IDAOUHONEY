"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"
const ProductsFiltersContext = createContext()


const Data = [
    {
        name: "Category",
        options: [
            "All",
            "Thyme Honey",
            "Euphorbia Honey",
            "Orange Blossom Honey",
            "Carob Honey",
            "Jujube (Sidr)",
            "Wildflower Honey"
        ]
    },
    {
        name: "Color / Intensity",
        options: [
            "All",
            "Light (Acacia, Orange Blossom)",
            "Amber (Wildflower, Lavender)",
            "Dark (Thyme, Eucalyptus, Carob)"
        ]
    },
    {
        name: "Taste Profile",
        options: [
            "All",
            "Mild & Sweet",
            "Floral & Fruity",
            "Strong & Herbal",
            "Bitter & Spicy"
        ]
    },
    {
        name: "Packaging Size",
        options: [
            "All",
            "250g",
            "500g",
            "1kg",
            "Bulk"
        ]
    }
]

const ProductsFilters = ({ children }) => {
    const Router = useRouter()
    const [Selects, setSelects] = useState({});
    const SearchParams = useSearchParams();
    const HandelsetSelects = o => {
        const params = new URLSearchParams(SearchParams.toString());
        if (o.name == "Category") {
            Router.push(`/products/${o.value}?${params.toString()}`);
            setSelects(pv => ({ ...pv, [o.name]: o.value }))
            return
        }
        if (o.value == "All") {
            params.delete(o.name);
        } else {
            params.set(o.name, o.value);
        }

        Router.push(`/products/${Selects["Category"]}?${params.toString()}`);
        setSelects(pv => ({ ...pv, [o.name]: o.value }))
    }


    useEffect(() => {
        Data.map(i => {
            setSelects(pv => ({ ...pv, [i.name]: i.options[0] }))
        })
    }, []);

    return (
        <ProductsFiltersContext value={{ Selects, HandelsetSelects, Data }}>
            {children}
        </ProductsFiltersContext>
    )
}

export const UseProductsFilters = () => {

    const { Selects, HandelsetSelects: setSelects, Data } = useContext(ProductsFiltersContext)

    return {
        Selects,
        setSelects,
        Data
    }

}

export default ProductsFilters
