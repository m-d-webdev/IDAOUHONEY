
import GreatH1 from "@/Components/Global/GreatH1";
import PartnerProfileImg from "../../../../Components/PartnerProfileImg";
import { PassionateTeam, PureNatur, Star2, Tagine } from "@/Components/icons";

const page = () => {
    return (
        <>
            <div className="w-full flex  justify-start items-center flex-col min-h-[90vh]  relative">
                <img className="w-full max-h-[900] h-[90vh] absolute top-2" src="/media/AboutUsBackgr.png" alt="" />
                <div className="z-[2] px-15 h-[50vh] mt-20 flex flex-col  items-center justify-center">
                    <GreatH1 className={"relative text-5xl"}>
                        About Us
                        <svg
                            className="absolute opacity-70 top-[-30] right-[-60]"
                            width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3617 4.69C18.4331 4.30768 18.636 3.96236 18.9352 3.71387C19.2344 3.46537 19.6111 3.32935 20 3.32935C20.3889 3.32935 20.7656 3.46537 21.0648 3.71387C21.364 3.96236 21.5669 4.30768 21.6383 4.69L23.39 13.9533C23.5144 14.6119 23.8345 15.2177 24.3084 15.6916C24.7823 16.1655 25.3881 16.4856 26.0467 16.61L35.31 18.3617C35.6923 18.4331 36.0376 18.636 36.2861 18.9352C36.5346 19.2344 36.6707 19.6111 36.6707 20C36.6707 20.3889 36.5346 20.7656 36.2861 21.0648C36.0376 21.364 35.6923 21.5669 35.31 21.6383L26.0467 23.39C25.3881 23.5144 24.7823 23.8345 24.3084 24.3084C23.8345 24.7823 23.5144 25.3881 23.39 26.0467L21.6383 35.31C21.5669 35.6923 21.364 36.0376 21.0648 36.2861C20.7656 36.5346 20.3889 36.6707 20 36.6707C19.6111 36.6707 19.2344 36.5346 18.9352 36.2861C18.636 36.0376 18.4331 35.6923 18.3617 35.31L16.61 26.0467C16.4856 25.3881 16.1655 24.7823 15.6916 24.3084C15.2177 23.8345 14.6119 23.5144 13.9533 23.39L4.69 21.6383C4.30768 21.5669 3.96236 21.364 3.71387 21.0648C3.46537 20.7656 3.32935 20.3889 3.32935 20C3.32935 19.6111 3.46537 19.2344 3.71387 18.9352C3.96236 18.636 4.30768 18.4331 4.69 18.3617L13.9533 16.61C14.6119 16.4856 15.2177 16.1655 15.6916 15.6916C16.1655 15.2177 16.4856 14.6119 16.61 13.9533L18.3617 4.69Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M33.3333 3.33331V9.99998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M36.6667 6.66669H30" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66659 36.6667C8.50753 36.6667 9.99992 35.1743 9.99992 33.3333C9.99992 31.4924 8.50753 30 6.66659 30C4.82564 30 3.33325 31.4924 3.33325 33.3333C3.33325 35.1743 4.82564 36.6667 6.66659 36.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg
                            className="absolute opacity-70 top-[-10] right-[-0]"
                            width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 11.6667C13.3333 13.4348 14.0356 15.1305 15.2859 16.3807C16.5361 17.631 18.2318 18.3333 19.9999 18.3333C21.768 18.3333 23.4637 17.631 24.714 16.3807C25.9642 15.1305 26.6666 13.4348 26.6666 11.6667C26.6666 9.89856 25.9642 8.20286 24.714 6.95262C23.4637 5.70238 21.768 5 19.9999 5C18.2318 5 16.5361 5.70238 15.2859 6.95262C14.0356 8.20286 13.3333 9.89856 13.3333 11.6667Z" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 35V31.6667C10 29.8986 10.7024 28.2029 11.9526 26.9526C13.2029 25.7024 14.8986 25 16.6667 25H22.5" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.6667 36.6667V36.6834" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.6667 31.6666C32.4139 31.6643 33.1387 31.4113 33.725 30.9482C34.3114 30.4852 34.7255 29.8388 34.901 29.1125C35.0765 28.3863 35.0033 27.6221 34.6931 26.9424C34.3829 26.2627 33.8537 25.7066 33.1901 25.3633C32.527 25.0237 31.7686 24.9183 31.0381 25.0645C30.3076 25.2107 29.6481 25.5997 29.1667 26.1683" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </GreatH1>
                    <h2 className="text-center text-lg font-medium tracking-tight max-w-[650] mt-10">Welcome to Idaoutanane Honey – a brand born in the mountains near Agadir, Morocco. Our passion is bringing you pure, natural honey straight from local beekeepers.</h2>
                </div>
                <div className=" w-full flex-wrap flex justify-evenly items-start">
                    <PartnerProfileImg className="mt-40" fullName="Mustapha Iderkaoui" description=" natural honey straight from local beekeepers." src="/media/PartnerImg.png" />
                    <PartnerProfileImg fullName="Mustapha Iderkaoui" description=" natural honey straight from local beekeepers." src="/media/PartnerImg.png" />
                    <PartnerProfileImg className="md:mt-20" fullName="Lahsen WASMIH" description=" natural honey straight  natural from natural " src="/media/Partner2.png" />
                </div>
            </div>
            {/* -----------------  SECOND PART --------------------------- */}
            <div className="min-h-[90vh] justify-center flex flex-col items-center ">
                <div className="flex  justify-evenly w-full items-end">
                    <GreatH1>
                        Our Story
                    </GreatH1>
                    <img className="h-[250]" src={'/media/icons/OurstoryIllustr.png'} />
                </div>
                <div className="flex p-2 flex-col  mt-12 justify-center  items-center w-full ">
                    <h2 className="max-w-[900] text-">
                        It all started with a  family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of honey while supporting sustainable practices.  It all started with a familyr generations. We believe in preserving the authentic taste of honey while supporting sustainable practices.
                    </h2>
                    <h2 className="max-w-[900] mt-4 text-">
                        It all started with a  family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of honey while supporting sustainable practices.  It all started with a family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of honey while supporting sustainable practices. It all started with a family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of honey while supporting sustainable practices.
                    </h2>
                </div>
            </div>
            {/* ----------------------- THIRD PART----------------------- */}
            <div className="w-full items-center flex mt-20 min-h-[90vh]   justify-center">
                <div className="w-full  gap-8 flex justify-evenly items-start max-w-[1200] p-4 ">

                    <iframe className="rounded-md h-[300] md:w-[450]" src="https://www.youtube.com/embed/pzE8alwIIyk?si=oUNsO4g3nMq-b3GU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className="">
                        <h1 className="font-semibold  text-2xl tracking-tighter max-w-[550]">We make the purest honey in Morocco, harvested with care from local beekeepers</h1>
                        <p className="mt-6 tracking-tight opacity-80 max-w-[600]"> It all started with a family tradition of beekeeping passed down for generations. We bel</p>
                        <p className="mt-6 tracking-tight opacity-80 max-w-[600]">  It all started with a family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of honey while supporting sustainable practices.  It all started with a family tradition of beekeeping passed down for generations. We believe in preserving the authentic taste of h</p>
                    </div>
                </div>
            </div>
            {/* ----------------------- THIRD PART----------------------- */}
            <div className="flex min-h-screen  w-full fle-col items-center justify-center flex-col">
                <h1 className="relative max-w-[500] text-center text-2xl font-medium tracking-tight">
                    Our mission is simple: share Morocco’s best honey with the world
                    <Star2 className={'w-[30] absolute right-[-40] top-[-30]'} />
                </h1>
                <p className="mt-4 font-medium opacity-70"> It all started with a family tradition of beekeeping passed down for generations. We </p>
                <div className="flex w-full mt-20 0 justify-evenly items-start">

                    <div className="flex flex-col items-center justify-center gap-2">
                        <PureNatur />
                        <h1 className="font-medium text-xl tracking-tight">Pure & Natural</h1>
                        <p className="text-center opacity-70 max-w-[400]">
                            Our honey is 100% pure, free from additives or artificial ingredients. Every jar is carefully harvested to preserve the natural taste, texture, and health benefits of authentic Moroccan honey.
                        </p>
                    </div>

                    <div className="flex flex-col  items-center justify-center gap-2">
                        <PassionateTeam className={"mt-40"} />
                        <h1 className="font-medium text-xl tracking-tight">Passionate Team</h1>
                        <p className="text-center opacity-70 max-w-[400]">
                            Behind every drop of our honey is a dedicated team of beekeepers and artisans who truly care about quality. We work with respect for nature and a deep love for beekeeping traditions.
                        </p>
                    </div>

                    <div className="flex flex-col  items-center justify-center gap-2">
                        <Tagine />
                        <h1 className="font-medium text-xl tracking-tight">Moroccan Tradition</h1>
                        <p className="text-center opacity-70 max-w-[400]">
                            We bring you honey that reflects Morocco’s rich landscapes and heritage. From the Atlas Mountains to coastal regions, our honey carries the flavors of a centuries-old tradition.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page
