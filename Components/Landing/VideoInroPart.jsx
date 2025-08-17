"use client"

import { useTranslation } from "react-i18next"
import GreatH1 from "../Global/GreatH1"
import { Input2 } from "../ui/input2"
import { Button } from "../ui/button"
import { SendHorizonal } from "lucide-react"
import Video from "../Global/Video"


const VideoInroPart = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full mt-20 flex flex-col items-center justify-center  p-4">

            <div
                style={{
                    filter: "drop-shadow(0 0 1px var(--filter-color))"
                }}
                className="flex  h-screen  gap-2 flex-col bg-accent/5  p-3 px-5 rounded-md border border-foreground/5 ">


                <Video
                    className="rounded-md max-h-[80vh] max-w-full"
                    src="media/videos/beekeprt.mp4"
                />
                <div className="flex items-center py-4 justify-between">
                    <GreatH1 className={"text-[26px] "}>
                        {t("INTROVIDEO.title")}
                    </GreatH1>
                    <div className="flex px-4  gap-2 items-center">
                        <Input2
                            className={"xl:w-[300] py-2"}
                            placeholder={t("COMMON.REVIEWCALL")}
                        />
                        <Button variant={"default"} className={"!p-5 "}>
                            {t("COMMON.SHARE")}
                            <SendHorizonal />
                        </Button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default VideoInroPart
