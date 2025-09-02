"use client"

import { UseProductsFilters } from "@/Contexts/ProductsFilters"
import { Circle } from "lucide-react"
import { useEffect, useState } from "react"

const A_filterList = ({
  Name = "",
  Options = [],
  Selects = {},
  onSelect = () => { }
}) => {

  return (
    <div className="mb-5">
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-nowrap  tracking-tight">{Name}</h1>
        <span className="relative w-full p-[1] bg-foreground opacity-30 flex items-center justify-end"><Circle className="right-[-3] absolute w-3 h-3 fill-foreground stroke-none" /></span>
      </div>
      <div className="gap-1 flex flex-col ltr:pl-4 mt-2 rtl:pr-4 items-start">
        {
          Options.map(o =>
            <div
              onClick={() => onSelect({
                name: Name,
                value: o
              })}
              className={`flex items-center justify-between  hover:opacity-100 gap-2 cursor-pointer 
              ${(Selects[Name] && Selects[Name] == o)
                  ? "bg-[#FFF6BC] font-medium"
                  : "hover:bg-accent opacity-60"} 
                 w-full rounded-md duration-200  p-2 border border-foreground/10`}
            >
              <p className="truncate w-full text-sm  tracking-tight "> {o}</p>
              {(Selects[Name] && Selects[Name] == o) &&
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#FFC30B" />
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              }
            </div>
          )
        }
      </div>

    </div>
  )
}

const Products_sidePare = () => {
  const { Selects, Data, setSelects } = UseProductsFilters()
 
  const handleSelect = option => {
    setSelects(option)

  }
  return (

    <div
      style={{
        filter: `drop-shadow(0 0 3px var(--filter-color))`
      }}
      className="md:pt-10 md:w-[260] bg-background p-2 px-4 rounded-xl borde border-foreground/15 ">

      {
        Data.map(i =>
          <A_filterList
            key={i.name}
            Selects={Selects}
            Name={i.name}
            onSelect={handleSelect}
            Options={i.options}
          />)
      }
    </div>
  )
}

export default Products_sidePare
