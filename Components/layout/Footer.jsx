"use client";

import { BellPlus, BellRing, Bot, Facebook, Instagram, Mail, MapPin, Monitor, Moon, Phone, Sun, Youtube } from "lucide-react";
import GreatH1 from "../Global/GreatH1";
import Logo from "./a/Logo";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import HeaderLinks from "./a/HeaderLinks";
import { Input } from "../ui/input";
import { changeLanguage } from "@/lib/i18n";
import { useState } from "react";
import { UseUser } from "@/Contexts/UserContext";
import { OpenChatBot } from "../Global/RandomBeTrip";
const NEXT_PUBLIC_EMAIL = process.env.NEXT_PUBLIC_EMAIL
const NEXT_PUBLIC_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS
const NEXT_PUBLIC_PHONE = process.env.NEXT_PUBLIC_PHONE
const NEXT_PUBLIC_FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK
const NEXT_PUBLIC_INSTA = process.env.NEXT_PUBLIC_INSTA
const NEXT_PUBLIC_X = process.env.NEXT_PUBLIC_X
const NEXT_PUBLIC_YOUTUBE = process.env.NEXT_PUBLIC_YOUTUBE


const FIRSTPART = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full  flex justify-between items-center">
            <div className="">

                <div className="flex  mb-9 gap-2 justify-start items-start">
                    <Logo />
                    <GreatH1 className={"text-[26px]"}>Tamnt</GreatH1>
                </div>
                <div className="flex flex-wrap gap-6">

                    <div className="flex gap-1 flex-col items-start justify-start">
                        <div className="flex opacity-70 justify-center items-start gap-1">
                            <Mail />
                            <p className="font-medium">
                                {t("LOGIN.email")}
                            </p>
                        </div>
                        <h1 className=" font-semibold tracking-tight">{NEXT_PUBLIC_EMAIL}</h1>
                    </div>

                    <div className="flex gap-1 flex-col items-start justify-start">
                        <div className="flex opacity-70 justify-center items-start gap-1">
                            <MapPin />
                            <p className="font-medium">
                                {t("COMMON.ADDRESS")}
                            </p>
                        </div>
                        <h1 className=" font-semibold tracking-tight">{NEXT_PUBLIC_ADDRESS}</h1>
                    </div>
                </div>

                <div className="flex mt-2 gap-1 flex-col items-start justify-start">
                    <div className="flex opacity-70 justify-center items-start gap-1">
                        <Phone />
                        <p className="font-medium">
                            {t("COMMON.PHONE")}
                        </p>
                    </div>
                    <h1 className=" font-semibold tracking-tight">+ {NEXT_PUBLIC_PHONE}</h1>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl max-w-[500] font-bold tracking-tighter">{t("FOOTER.CTA1")}</h1>
                <div className="flex mt-6 gap-4">
                    <Button variant={"default"} className={"text-base px-8 py-6 rounded-md"}>
                        {t("COMMON.SHOPNOW")}
                    </Button>
                    <Button variant={""} className={"text-base px-8 py-6 rounded-md"}>
                        {t("COMMON.LEARNMORE")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

const SECONDPART = () => {
    const { t } = useTranslation()
    return (
        <div className="flex gap-3  py-6 items-center justify-between  w-full">
            <div className=""></div>
            <div className="relative flex items-center justify-center">
                <HeaderLinks toTop={true} />
            </div>

            <div className=""></div>
            <div className=""></div>
            <div className="flex gap-2 flex-col items-start justify-start">
                <h1 className="tracking-tight opacity-80 font-medium max-w-[500]">{t("FOOTER.CTA2")}</h1>
                <div className="flex  gap-4">
                    <Input
                        id="email"
                        className={"bg-accent/30 pt-3"}
                        parentClassName=" w-full !max-w-[600]"
                        label={t("LOGIN.email")}
                    />
                    <Button variant={"default"}>
                        <BellRing />
                        {t("COMMON.SUBSCRIBE")}
                    </Button>
                </div>
            </div>

        </div>

    )
}
const THIRTPART = () => {
    const { theme, handelChangeTheme } = UseUser()

    const { t } = useTranslation();
    return (
        <div className="flex gap-3  tracking-tight py-6 items-center justify-between  w-full">
            <div className="">
                <div className="flex gap-2">
                    <h1 className="font-medium text-lg">{new Date().getFullYear()} </h1>
                    <GreatH1 className={"text-lg tracking-tight"}>Tamnt</GreatH1>
                </div>
                <div className="flex mt-2 items-center gap-3">
                    <p>{t("COMMON.FOLLOWUS")} :</p>

                    <div className="flex gap-4 mx-4">
                        <Button className={""} size={"icon"}>

                            <a className={""} href={NEXT_PUBLIC_FACEBOOK} target="_blank"><Facebook className="stroke-[1]  !w-5 !h-5    " /> </a>
                        </Button>
                        <Button className={""} size={"icon"}>

                            <a className={""} href={NEXT_PUBLIC_INSTA} target="_blank"><Instagram className="stroke-[1]   !w-5 !h-5   " /> </a>
                        </Button>
                        <Button className={""} size={"icon"}>

                            <a className={""} href={NEXT_PUBLIC_YOUTUBE} target="_blank"><Youtube className="stroke-[1]  !w-5 !h-5 " /> </a>
                        </Button>
                        <Button className={""} size={"icon"}>

                            <a className={""} href={NEXT_PUBLIC_X} target="_blank">
                                <svg className="stroke-[1]   !w-5 !h-5   " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.7">
                                        <path d="M3 3L11.7997 15H15L6.20025 3H3Z" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 15L8.076 9.924M9.921 8.079L15 3" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </a>
                        </Button>

                    </div>
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <Button onClick={OpenChatBot} size={"lg"} variant={"dark"} className="flex rounded-full gap-2 items-center  font-semibold ">
                    <Bot />
                    Chat bot
                </Button>
                <div className="flex gap-6 items-center">
                    <h2 className="opacity-70 font-medium">{t("COMMON.LANGUAGE")}</h2>
                    <div className="flex gap-3">
                        <Button onClick={() => {
                            changeLanguage("en")
                        }}
                            className={"font-semibold rounded-3xl text-base"}>
                            English
                        </Button>
                        <Button onClick={() => {
                            changeLanguage("fr")
                        }}
                            className={"font-semibold rounded-3xl text-base"}>
                            Francais
                        </Button>
                        <Button onClick={() => {
                            changeLanguage("ar")
                        }}
                            className={"font-semibold rounded-3xl text-base"}>
                            العربية
                        </Button>
                    </div>
                </div>

                <div className="flex gap-2 border border-foreground/15 p-1  rounded-4xl">
                    <button onClick={() => handelChangeTheme("light")} className={` ${theme == "light" ? "bg-accent border border-foreground/20" : ""} p-2 rounded-full`}>
                        <Sun className="w-5 h-5" />
                    </button>
                    <button onClick={() => handelChangeTheme("dark")} className={` ${theme == "dark" ? "bg-accent border border-foreground/20" : ""} p-2 rounded-full`}>
                        <Moon className="w-5 h-5" />
                    </button>
                    <button onClick={() => handelChangeTheme("auto")} className={` ${theme == "auto" ? "bg-accent border border-foreground/20" : ""} p-2 rounded-full`}>
                        <Monitor className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>

    )
}
const Footer = () => {
    return (
        <div className="w-full  p-8 border-t  border-foreground/15 mt-40">
            <FIRSTPART />
            <div className="w-full mt-8 bg-foreground/15 p-[1]"></div>
            <SECONDPART />
            <div className="w-full mt-8 bg-foreground/15 p-[1]"></div>
            <THIRTPART />
        </div>
    )
}

export default Footer
