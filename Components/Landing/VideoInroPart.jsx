"use client"
import { useTranslation } from "react-i18next"
import GreatH1 from "../Global/GreatH1"
import { Button } from "../ui/button"
import { SendHorizonal } from "lucide-react"
import ExtendingInput from "../ui/ExtendingInput"
import { useState } from "react"


const VideoInroPart = () => {
    const { t } = useTranslation();
    const [feedBack, setfeedBack] = useState("")
    return (
        <div className="w-full mt-40 flex flex-col items-center justify-center  ">

            <div

                className="flex w-full items-center  max-w-[1000] min-h-screen    gap-2 flex-col   ">
                <div className="flex mb-20 flex-col items-center-safe justify-center">
                    <GreatH1 className={"!text-3xl"}>{t("INTROVIDEO.title")}</GreatH1>
                    <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                    <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>
                </div>
                <div style={{
                    filter: `drop-shadow(0 0  10px var(--filter-color))`
                }}
                    className="bg-background p-1 rounded-xl">

                    <iframe className=" md:w-[900] md:h-[500]  max-h-[90vh] rounded-xl " src="https://www.youtube.com/embed/SzINZZ6iqxY?si=rCa4CT5iVa4Oz-sX&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="flex w-full items-start py-4 justify-between">
                    {/*                 
                    <div className="flex px-4  gap-2 items-start">
                        <ExtendingInput
                            TheWidth={400}
                            TheHeight={60}
                            onChange={e => setfeedBack(e.target.value)}
                            value={feedBack}
                            placeholder={t("COMMON.REVIEWCALL")}
                        />
                        <Button variant={"default"} className={"!p-5 "}>
                            {t("COMMON.SHARE")}
                            <SendHorizonal />
                        </Button>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default VideoInroPart
