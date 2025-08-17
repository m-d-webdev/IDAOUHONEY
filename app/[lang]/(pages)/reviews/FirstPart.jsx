"use client";
import GreatH1 from '@/Components/Global/GreatH1'
import RoundedImg from '@/Components/ui/RoundedImg'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FirstPart = () => {
    const { t } = useTranslation()

    return (
        <div className="flex w-full   min-h-[500] max-w-[1200]  relative items-center justify-center flex-col">
            <>
                <div style={{
                    filter: `drop-shadow(2px 10px 5px var(--filter-color))`
                }}
                    className=" absolute rounded-full right-6 p-1 bg-background  -top-0  ">


                    <svg
                        className='absolute  right-[80%] top-[80%]'
                        width="280" height="133"
                        viewBox="0 0 280 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M279 10.4999C-39 -39 303.5 119.5 88 119.5L0.5 132.5" stroke="url(#paint0_linear_173_5)" />
                        <defs>
                            <linearGradient id="paint0_linear_173_5" x1="139.75" y1="0.923096" x2="139.75" y2="132.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.365381" stop-color="#FFC30B" />
                                <stop offset="1" stop-color="#FFEE00" stop-opacity="0.13" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <RoundedImg
                        src={"https://i.pinimg.com/736x/54/91/82/5491821650a124263455c6dbc66ea1fe.jpg"}
                        className={" w-[80] h-[80]"}
                    />
                </div>


                <div style={{
                    filter: `drop-shadow(2px 10px 5px var(--filter-color))`
                }}
                    className=" absolute top-0 rounded-full left-6 p-1 bg-background    ">


                    <svg className='absolute top-[85%] left-[85%]' width="320" height="236" viewBox="0 0 320 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.50001 0.500004C375 64.4998 -128 318 216.5 207.5L319.001 181" stroke="url(#paint0_linear_175_2)" />
                        <defs>
                            <linearGradient id="paint0_linear_175_2" x1="35.5" y1="74" x2="323.551" y2="148.744" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFC30B" />
                                <stop offset="1" stop-color="#FFEE00" stop-opacity="0.13" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <RoundedImg
                        src={"https://i.pinimg.com/1200x/69/42/bf/6942bfd431f42c202ab0f270dc2fbd3b.jpg"}
                        className={" w-[60] h-[60]"}
                    />
                </div>



                <div style={{
                    filter: `drop-shadow(2px 10px 5px var(--filter-color))`
                }}
                    className=" absolute rounded-full -bottom-0 p-1 bg-background    ">

                    <RoundedImg
                        src={"https://i.pinimg.com/1200x/29/44/6f/29446f779978b1af0e06b4d3c4e3c1da.jpg"}
                        className={" w-[70] h-[70]"}
                    />
                </div>
            </>


            <GreatH1 className={"relative w-fit "}>
                {t("CONTACT.WHATCLIENTSAY")}
                <svg
                    className='absolute left-[40%] top-[100%]'
                    width="437" height="224" viewBox="0 0 437 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M230.5 0.499939C298.5 4.09994 458.5 108.5 433.5 72.5C408.5 36.5 338 28.4999 299.5 141.5C261 254.5 1 217 1 217" stroke="url(#paint0_linear_175_3)" />
                    <defs>
                        <linearGradient id="paint0_linear_175_3" x1="471.5" y1="-24" x2="20.5" y2="223" gradientUnits="userSpaceOnUse">
                            <stop offset="0.365381" stop-color="#FFC30B" />
                            <stop offset="1" stop-color="#FFEE00" stop-opacity="0.13" />
                        </linearGradient>
                    </defs>
                </svg>
            </GreatH1>
            <h2 className='text-center    mt-6 tracking-tight opacity-80 max-w-[600]'>{t("TESTIMONIALS.SUBTITLE")}</h2>

        </div>
    )
}

export default FirstPart
