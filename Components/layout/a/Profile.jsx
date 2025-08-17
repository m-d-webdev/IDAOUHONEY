'use client';

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProfileDropDpwn from "./ProfileDropDpwn";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { LogIn, UserPlus2 } from "lucide-react";
import { UseUser } from "@/Contexts/UserContext";
import CartButton from "./CartButton";
import { useTranslation } from "react-i18next";
import RoundedImg from "@/Components/ui/RoundedImg";

const Profile = () => {
    const { data, isLoggedIn } = UseUser();
    let fistLtter = data?.fullName ?? "M";
    fistLtter = fistLtter.substring(0, 1)
    const { t } = useTranslation()
    const [MenuOpen, setMenuOpen] = useState(false)
    return (
        <>
            {
                isLoggedIn
                    ?
                    <div className="relative flex items-center justify-center gap-5">
                        <CartButton />
                        {
                            data?.imageUrl
                                ? <RoundedImg onClick={() => setMenuOpen(true)} src={data?.imageUrl} />
                                :
                                <div onClick={() => setMenuOpen(true)} className="w-[40px] cursor-pointer h-[40px] rounded-full bg-[#FFD700]  flex items-center justify-center">
                                    <h1 className="font-semibold text-xl">{fistLtter.toUpperCase()}</h1>
                                </div>
                        }
                        <AnimatePresence>
                            {
                                MenuOpen &&
                                <ProfileDropDpwn onClose={() => setMenuOpen(false)} />
                            }
                        </AnimatePresence>


                    </div>
                    : <div className="relative gap-5 mx-3 flex items-center justify-center">
                        <Link href={"/login"} className="font-semibold text-sm tracking-tight">
                            {t("COMMON.LOGIN")}
                        </Link>
                        <Link href={"/register"} className="font-semibold text-sm tracking-tight">
                            {t("COMMON.REGISTER")}
                        </Link>
                    </div>
            }

        </>
    )
}

export default Profile
