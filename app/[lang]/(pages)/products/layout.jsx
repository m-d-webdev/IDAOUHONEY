import GreatH1 from "@/Components/Global/GreatH1"
import Products_sidePare from "./(components)/Products_sidePare.jsx"
import ProductsFilters from "@/Contexts/ProductsFilters.jsx"
import FiltersLine from "./(components)/FiltersLine.jsx"
import LocalSearchInput from "./(components)/LocalSearchInput.jsx"


const layout = ({ children }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            <div className="w-full justify-evenly flex p-10">
                <h1 className="max-w-[550] font-semibold tracking-tighter text-4xl">
                    Harvested with care, 100% natural and full of flavor.
                </h1>
                <img className="h-[300]" src="/media/ProductsIntro.png" alt="" />
            </div>


            <ProductsFilters>
                <div className="flex w-full pt-6 bg-background items-center gap-10">

                    <div className="flex p-4 flex-col ">
                        <GreatH1 className={"!text-3xl text-nowrap"}>Our Honey Collection</GreatH1>
                        <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                        <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>
                    </div>
                    <LocalSearchInput />
                </div>
                <div className="w-full bg-background p-4 pt-2 flex gap-2 items-start justify-start">
                    <h1 className="    overflow-auto scrl_none w-[200] md:w-[260] font-semibold text-xl tracking-tight">
                        Filter
                    </h1>
                    <FiltersLine />
                </div>
                <div className="w-full  bg-gray3 p-2  flex gap-2 items-start justify-start">
                    <Products_sidePare />

                    <div className="w-full flex  justify-center ">
                        {children}
                    </div>
                </div>
            </ProductsFilters>
        </div>
    )
}

export default layout
