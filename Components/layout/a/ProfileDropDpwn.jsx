"use client";

import { Logout } from "@/Api/Auth";
import Loader from "@/Components/Global/Loader";
import { Button } from "@/Components/ui/button";
import RoundedImg from "@/Components/ui/RoundedImg";
import { UseUser } from "@/Contexts/UserContext";
import { changeLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ClockArrowDown, LogOut, Monitor, Moon, Sun, UserRoundCog, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


const ProfileDropDpwn = ({ onClose }) => {
    const { data, isLoggedIn } = UseUser();
    let fistLtter = data?.fullName ?? "M";
    fistLtter = fistLtter.substring(0, 1)
    const { fullName, email } = data
    const PageRef = useRef();
    const { theme, handelChangeTheme } = UseUser()
    const { t, i18n } = useTranslation()
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);;



        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [IsLogginOut, setIsLogginOut] = useState(false)
    const handleLogout = async () => {
        setIsLogginOut(true);
        await Logout();
        setIsLogginOut(false)
    }





    return (
        <motion.div
            initial={{
                opacity: .6,
                scale: .95,
                y: -6
            }}
            exit={{
                opacity: 0,
                scale: .95,
                y: -6,

            }}
            ref={PageRef}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    duration: .1,
                    type: "keyframes"
                }
            }}
            style={{
                filter: "drop-shadow(0 0 2px var(--filter-color))"
            }}
            className={`p-3 text-sm pt-5 md:w-[280] rounded-md opacity-100 text absolute bg-background  flex flex-col 3xl:right-auto ltr:right-0 rtl:left-0 gap-3 z-10 top-[54]`}>


            <div onClick={onClose} className="rtl:left-2 ltr:right-2 cursor-pointer top-2 absolute flex ">
                <X className="w-4 h-4 opacity-60 hover:opacity-100" />
            </div>

            <div className="flex  gap-2">

                {
                    data?.imageUrl
                        ? <RoundedImg src={data?.imageUrl} />
                        :
                        <div className="w-[35px] min-w-[35px] cursor-pointer h-[35px] rounded-full bg-[#FFD700]  flex items-center justify-center">
                            <h1 className="font-semibold text-xl">{fistLtter?.toUpperCase()}</h1>
                        </div>
                }
                <div className="flex  flex-col ">
                    <h1 className="font-medium capitalize">{fullName}</h1>
                    <h2 className="opacity-70 break-all text-wrap">{email}</h2>
                </div>
            </div>
            {/* <span className="w-full border mt-2 border-border"></span> */}

            <Link href={"/orders"} className="flex  font-medium items-center p-2 rounded-md hover:bg-accent/70   hover:opacity-100 duration-150  gap-2">
                <ClockArrowDown className="w-5 h-5" />
                {t("COMMON.ORDER_HISTORY")}
            </Link>
            <Link href={"/orders"} className="flex font-medium items-center p-2 rounded-md hover:bg-accent/70   hover:opacity-100 duration-150  gap-2">
                <UserRoundCog className="w-5 h-5" />
                {t("COMMON.ACCOUNT_SETTING")}
            </Link>
            {/* <span className="w-full border mt-2 border-border"></span> */}
            <div
                className="flex font-medium justify-between items-center p-2 rounded-md hover:bg-accent/70   hover:opacity-100 duration-150  gap-2"
            >
                {t("COMMON.THEME")}

                <div className="flex gap-2 items-center">
                    <Button onClick={() => handelChangeTheme("light")} className={`${theme == "light" ? "!bg-accent opacity-100" : "opacity-70"} `}>
                        <Sun />
                    </Button>
                    <Button onClick={() => handelChangeTheme("dark")} className={`${theme == "dark" ? "!bg-accent opacity-100" : "opacity-70"} `}>
                        <Moon />
                    </Button>
                    <Button onClick={() => handelChangeTheme("auto")} className={`${theme == "auto" ? "!bg-accent opacity-100" : "opacity-70"} `}>
                        <Monitor />
                    </Button>
                </div>
            </div>

            <div
                className="flex font-medium justify-between items-center p-2 rounded-md hover:bg-accent/70   hover:opacity-100 duration-150  gap-2"
            >
                {t("COMMON.LANGUAGE")}

                <div className="flex gap-2 items-center">
                    <Button onClick={() => changeLanguage("ar")} className={"!px-2"}>
                        <img className="w-[20] h-[20]" src={"/media/ar.png"} />
                    </Button>
                    <Button onClick={() => changeLanguage("fr")} className={"!px-2"} >
                        <img className="w-[20] h-[20]" src={"/media/fr.png"} />
                    </Button>
                    <Button onClick={() => changeLanguage("en")} className={"!px-2"}>
                        <img className="w-[20] h-[20]" src={"/media/en.png"} />
                    </Button>
                </div>
            </div>
            <Button
                disabled={IsLogginOut}
                onClick={handleLogout}
                className={'w-full relative border-none flex justify-between items-center'}>
                {t("COMMON.LOGOUT")}
                <LogOut />
                {
                    IsLogginOut &&
                    <Loader />
                }
            </Button>
        </motion.div>
    )
}

export default ProfileDropDpwn
