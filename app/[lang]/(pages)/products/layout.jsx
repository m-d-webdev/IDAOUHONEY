import GreatH1 from "@/Components/Global/GreatH1"
import Products_sidePare from "./(components)/Products_sidePare.jsx"
import ProductsFilters from "@/Contexts/ProductsFilters.jsx"


const layout = ({ children }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            <div className="w-full justify-evenly flex p-10">
                <h1 className="max-w-[550] font-semibold tracking-tighter text-4xl">
                    Harvested with care, 100% natural and full of flavor.
                </h1>
                <img className="h-[300]" src="/media/ProductsIntro.png" alt="" />
            </div>
            <div className="flex p-4 flex-col ">
                <GreatH1 className={"!text-3xl text-nowrap"}>Our Honey Collection</GreatH1>
                <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>
            </div>

            <ProductsFilters>

                <div className="w-full p-4 mt-3 flex gap-2 items-start justify-start">
                    <h1 className=" md:w-[35%] font-semibold text-xl tracking-tight">
                        Filter
                    </h1>
                    <div className="flex gap-2">
                        <button>
                            filter1
                        </button>
                        <button>
                            filter1
                        </button>
                        <button>
                            filter1
                        </button>
                    </div>
                </div>
                <div className="w-full bg-accent/40 p-2 mt-3 flex gap-2 items-start justify-start">
                    <Products_sidePare />

                    <div className="w-full flex p-2  md:w-[70%]   center border border-black ">
                        <div className="bg-red-500">{children}</div>
                    </div>
                </div>
            </ProductsFilters>
        </div>
    )
}

export default layout
