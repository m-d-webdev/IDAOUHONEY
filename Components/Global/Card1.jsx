'use client';
import { Button } from '../ui/button'
import GreatH1 from './GreatH1';

const Card1 = ({
    title = "",
    subtitles = [],
    buttonText = "",
    buttonClassName = "",
    subtitleClassName = "",
    titleClassName = "",
    parentClassName = "",
    setGreatH1 = false

}) => {
    return (
        <div
            style={{
                filter: "drop-shadow( 0 0 4px var(--filter-color))"
            }}
            className={`${parentClassName}  gap-3 flex flex-col items-start justify-start bg-background p-4  rounded-xl `}>
            {
                setGreatH1
                    ? <GreatH1 className={"text-[24px]"}>{title}</GreatH1>
                    : <h1 className={`${titleClassName} text-xl tracking-tighter font-medium`}>{title}</h1>

            }
            <div className="flex flex-col items-start justify-start gap-2  ltr:pl-2 rtl:pr-2">

                {
                    subtitles.map((s, i) =>
                        <p key={i} className={`${subtitleClassName} hover2 font-medium`}>{s}</p>
                    )
                }
            </div>
            <Button className={`${buttonClassName} mt-3 w-full py-3 bg-[#FABD01] text-white`}>
                {
                    buttonText
                }
            </Button>
        </div>
    )
}

export default Card1
