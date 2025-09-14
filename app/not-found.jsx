
import "@/app/[lang]/globals.css"



const NotFound = () => {
    return (
        <div className=" w-screen relative  h-screen flex flex-col items-center justify-center">
            <img src="/media/coming-soon-design.png" className="h-[400]" alt="" />
            <h1 className={` font-medium text-2xl  tracking-tighter text-center max-w-[400]`}>Sorry, this page is not available or is currently under review.</h1>
            <div className="absolute bottom-10 right-10">
            </div>
        </div>
    )
}

export default NotFound
