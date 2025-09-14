
import Comingsoon from "@/Components/lotties/Comingsoon"
import Consultation from "@/Components/lotties/Consultation"
import "@/app/[lang]/globals.css"



const notFound = () => {
    return (
        <div className=" w-screen relative  h-screen flex flex-col items-center justify-center">
            <Consultation />
            <h1 className={`mt-4 font-medium text-2xl  tracking-tighter text-center max-w-[400]`}>Sorry, this page is not available or is currently under review.</h1>
            <div className="absolute bottom-10 right-10">
                <Comingsoon />
            </div>
        </div>
    )
}

export default notFound
