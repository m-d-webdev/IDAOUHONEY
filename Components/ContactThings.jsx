"use client";
import React from 'react'
import GreatH1 from './Global/GreatH1'
import { useTranslation } from 'react-i18next';
import { Input } from './ui/input';
import { Building2, Mail, Phone, Send, User } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';

const ContactThings = () => {
    const { t } = useTranslation()
    return (
        <div className='w-full  flex-col  gap-10 flex items-start justify-start  p-3 pt-0'>

            <div className="  w-full ">
                <h1 className={"tracking-tighter  text-[26px] font-bold "}>
                    {t("CONTACT.FORMTITLE")}
                </h1>
                <div className="grid  mt-7 md:grid-cols-2 gap-2 grid-cols-1">
                    <Input
                        id='full-name'
                        parentClassName='w-full'
                        label={t("COMMON.FULLNAME")}
                        icon={<User className='w-5 h-5' />}
                    />
                    <Input
                        parentClassName='w-full'
                        id='phone'
                        label={t("COMMON.PHONE")}
                        icon={<Phone className='w-5 h-5' />}
                    />
                </div>
                <Input
                    id='email'
                    parentClassName='w-full mt-2 !max-w-full'
                    label={t("LOGIN.email")}
                    icon={<Mail className='w-5 col-span-2 h-5' />}
                />
                <Textarea
                    id='message'
                    parentClassName='w-full mt-2 !max-w-full'
                    label={t("COMMON.MESSAGE")}
                    icon={<Mail className='w-5 col-span-2 h-5' />}
                />
                <Button className={"w-full py-6  mt-8"} variant={"default"}>
                    {t("COMMON.SEND")}
                    <Send />
                </Button>
            </div>
            <div className="flex   w-full flex-col gap-2 ">
                <div className="flex    items-center justify-center gap-3">
                    <div className="w-[40%] p-[1] bg-foreground/20"></div>
                    or
                    <div className="w-[40%] p-[1] bg-foreground/20"></div>
                </div>
                <h1 className={"tracking-tight  mt-4 text-[22px] font-semibold "}>
                    {t("CONTACT.TALKTOSALETEAM")}
                </h1>
                <p className='font-medium opacity-80'>
                    {
                        t("CONTACT.SUBTITLE1")
                    }
                </p>
                <Link href={"/contact-sales"}>
                    <Button className={" w-full mt-3 text-base py-6"} variant={"dark"}>
                        {t("COMMON.CONTACTTEAM")}
                        <Building2 />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ContactThings
