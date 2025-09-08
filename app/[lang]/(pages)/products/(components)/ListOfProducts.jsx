"use client"

import { GetProducts } from "@/Api/Products";
import ProductCard, { LoadinProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { UseProductsFilters } from "@/Contexts/ProductsFilters";
import NoResult from "@/Components/lotties/NoResult";
import { useTranslation } from "react-i18next";
import { i18n } from "next-i18next";


const ListOfProducts = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language
  const [honeyProducts, sethoneyProducts] = useState([]);
  const { Selects, secondFilterParams } = UseProductsFilters()
  const [isloading, setisloading] = useState(false);
  const [totalResult, settotalResult] = useState(0);
  const [totalPages, settotalPages] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);


  const handelGetProducts = async () => {
    const FiltrOptions = {};
    Object.entries(Selects).map(([key, value]) => {
      if (value.slug && value.slug.en != "all") {
        FiltrOptions[key.toLowerCase()] = value.slug[lang]
      }
    });

    Object.entries(secondFilterParams).map(([key, value]) => {
      if (value != "" && value != null) {
        FiltrOptions[key.toLowerCase()] = value
      }
    });


    setisloading(true)
    const res = await GetProducts({ params: FiltrOptions });
    setisloading(false)
    sethoneyProducts(res.products)
    setcurrentPage(res.currentPage)
    settotalResult(res.totalProducts)
    settotalPages(res.totalPages)

  }

  useEffect(() => {
    // if (Object.keys(Selects).length > 0) {
    handelGetProducts()
    // }
  }, [Selects, secondFilterParams]);

  return (
    <div className="w-full">
      {
        isloading
          ? <h2 className="mx-8  rounded  w-[300] h-[20] animated-loading-color  mb-4"></h2>
          : <h2 className="mx-8 tracking-tighter w-fit text-xl font-medium mb-4">Showing {honeyProducts?.length} of {totalResult} result</h2>
      }
      <div className="w-full min-h-[300] relative gap-2 grid  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-2 ">

        {isloading
          ? [1, 2, 3].map(i => <LoadinProductCard key={i} />)
          : honeyProducts.map(i => <ProductCard item_data={i} key={i.id} />)
        }
        {
          !isloading && honeyProducts.length == 0 &&
          <div className="w-full p-4 mt-4 absolute flex flex-col items-center justify-center  gap-2 ">
            <NoResult />
            <h2 className="text-center mt-3 opacity-70 max-w-[500]">We apologize, currently no products are available for your search criteria.</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default ListOfProducts
