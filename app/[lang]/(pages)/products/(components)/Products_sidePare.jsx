"use client"

import { Button } from "@/Components/ui/button"
import { UseProductsFilters } from "@/Contexts/ProductsFilters"
import { ChevronLeft, ChevronRight, Circle, CircleDollarSign, Droplets, LayoutPanelLeft, PaintBucket } from "lucide-react"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "@/Components/SubCss.css"
import { Input2 } from "@/Components/ui/input2"
const IsloadingList = () => {
  return (
    <>
      <div className="flex min-w-[150] w-full  items-center  gap-2">

        <div className="w-[20] h-[20] animated-loading-color   rounded "></div>
        <div className="w-[60%] animated-loading-color rounded-lg h-[15]  "></div>

        <span className="relative w-[30%] p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
      </div>
      <div className="gap-2 w-full flex flex-col ltr:pl-4 mt-4 rtl:pr-4 items-start">
        {
          [1, 2, 3, 4].map(o =>
            <div key={o} className="w-[90%] h-[15] animated-loading-color rounded-lg "></div>
          )
        }
      </div>
    </>
  )
}

const A_filterListWithReadMore = ({
  name = "",
  icon = "",
  list,
  isLoading,
  Selects = {},
  resized,
  maxItems = 5,
  onSelect = () => { }
}) => {
  const [maxItemsToShow, setmaxItemsToShow] = useState(maxItems)
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  return (

    <div className="mb-5 w-full">
      {
        resized
          ? <div className="px-3 mb-2 opacity-70">{React.isValidElement(icon) && icon}</div>
          : <>
            {
              isLoading
                ? <IsloadingList />
                : <>
                  <div className="flex items-center gap-2">

                    {
                      React.isValidElement(icon) && icon
                    }

                    <h1 className="font-medium text-nowrap  tracking-tight">{name}</h1>
                    <span className="relative w-full p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
                  </div>
                  <div className="gap-1 flex flex-col ltr:pl-4 mt-2 rtl:pr-4 items-start">

                    {
                      [
                        { slug: { en: "all", fr: "tout", ar: "الكل" }, name: { en: "All", fr: "Tout", ar: "الكل" } },
                        ...list.slice(0, maxItemsToShow)
                      ]
                        .map(o =>
                          <div
                            onClick={() => onSelect({ name: name, obj: o })}
                            className={`flex  items-center justify-between  hover:opacity-100 gap-2 cursor-pointer 
                           ${(Selects[name] && Selects[name].slug["en"] == o.slug["en"])
                                ? "bg-[#FFF6BC] font-medium text-black"
                                : "hover:bg-accent opacity-60"} 
                           w-full rounded-md duration-200  p-2 border border-foreground/10`}
                          >

                            <p className="truncate w-full text-sm   tracking-tight "> {o.name[lang]}</p>

                            {(Selects[name] && Selects[name].slug["en"] == o.slug["en"]) &&
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#FFC30B" />
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            }
                          </div>
                        )
                    }
                    {
                      list.length > maxItems &&
                      <Button
                        className={"opacity-40 border-none text-xs"}
                        onClick={() => setmaxItemsToShow(pv => pv == list.length ? maxItems : list.length)}>{
                          list.length == maxItemsToShow
                            ? <>
                              Show Less
                              <ChevronLeft className="rtl:rotate-180" />
                            </>
                            : <>
                              Show More
                              <ChevronRight className="rtl:rotate-180" />
                            </>

                        } </Button>
                    }
                  </div>
                </>
            }

          </>
      }


    </div>
  )
}

const Products_sidePare = () => {
  const { Selects, Categories, HoneyColors, setsecondFilterParams, loadingCategories, setSelects } = UseProductsFilters()
  const [resized, setresized] = useState(false)

  return (

    <div
      style={{
        filter: `drop-shadow(0 0 3px var(--filter-color))`
      }}
      className={`md:max-h-[90vh] duration-300 sticky top-8  overflow-auto scrl_none bg-background   rounded-xl borde border-foreground/15 
       ${resized
          ? "md:w-[50]"
          : "md:w-[260] px-4"
        } `}>

      <div className={`w-full flex   mb-3
           ${resized
          ? "justify-end "
          : "justify-end"
        }`}>

        <Button onClick={() => setresized(pv => !pv)} size={"icon"} className={"border-none opacity-70 hover:opacity-100 text-black"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`!w-6 duration-400 !h-6
              ${resized
                ? "!rotate-[180deg]"
                : "!rotate-[0deg]"
              }`}

            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M9 4v16" />
            <path d="M15 10l-2 2l2 2" />
          </svg>
        </Button>
      </div>
      {
        <A_filterListWithReadMore
          resized={resized}
          Selects={Selects}
          onSelect={setSelects}
          name="Category"
          icon={<LayoutPanelLeft className="w-4 h-4 min-w-4" />}
          list={Categories}
          maxItems={3}
          isLoading={loadingCategories}
        />
      }
      {
        <A_filterListWithReadMore
          resized={resized}
          Selects={Selects}
          onSelect={setSelects}
          name="Color"
          icon={<PaintBucket className="w-4 h-4 min-w-4" />}
          maxItems={3}
          list={HoneyColors}
          isLoading={loadingCategories}
        />
      }
      {/* _ MAX PRICE _____________________ */}
      {
        !resized &&
        <>
          <div className="mb-4">
            <div className="flex mb-2 items-center gap-2">
              <CircleDollarSign className="w-4 min-w-4 y-4" />
              <h1 className="font-medium text-nowrap  tracking-tight">Max price</h1>
              <span className="relative w-full p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
            </div>

            <Input2 onChange={e => setsecondFilterParams(pv => ({ ...pv, maxPrice: e.target.value }))} placeholder="max price" type={"number"} min="0" />
          </div>
          {/* _ MIN PRICE _____________________ */}

          <div className="mb-4">
            <div className="flex mb-2 items-center gap-2">
              <CircleDollarSign className="w-4 min-w-4 y-4" />
              <h1 className="font-medium text-nowrap  tracking-tight">Min price</h1>
              <span className="relative w-full p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
            </div>
            <Input2 onChange={e => setsecondFilterParams(pv => ({ ...pv, minPrice: e.target.value }))} placeholder="min price" type={"number"} min="0" />
          </div>

          <div className="pb-8">
            <div className="flex mb-2 items-center gap-2">
              <Droplets className="w-4 min-w-4 y-4" />
              <h1 className="font-medium text-nowrap  tracking-tight">Taste</h1>
              <span className="relative w-full p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
            </div>
            <Input2 onChange={e => setsecondFilterParams(pv => ({ ...pv, taste: e.target.value }))} placeholder="Taste ..." />
          </div>
        </>
      }
    </div>
  )
}

export default Products_sidePare
