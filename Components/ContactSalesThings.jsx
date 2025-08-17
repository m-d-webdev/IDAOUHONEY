"use client";
import React, { useEffect, useState } from 'react'
import GreatH1 from './Global/GreatH1'
import { useTranslation } from 'react-i18next';
import { Input } from './ui/input';
import { Building2, Earth, Mail, Send } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Select from './ui/select';
import { FetchContries } from '@/lib/utils';
const ContactSalesThings = () => {
    const { t } = useTranslation();
    const [contries, setcontries] = useState([])
    const FetchContriesFun = async () => {
        const data = FetchContries();
        setcontries(data)
        // console.log(data);

    }
    useEffect(() => {
        FetchContriesFun()
    }, []);


    
    return (
        <div className='w-full  flex-col  gap-2 flex items-start justify-start  p-3 pt-0'>
            <GreatH1 className={"tracking-tighter  text-[26px] font-bold "}>
                {t("CONTACT.TALKTOSALETEAM")}
            </GreatH1>

            <p>
                {
                    t("CONTACT.SUBTITLE2")
                }
            </p>
            <Input
                id='company-name'
                parentClassName='w-full  mt-4 !max-w-full'
                label={t("CONTACT.COMPANYEMAIL")}
                icon={<Building2 className='w-5 h-5' />}
            />
            <Select
                parentClassName='w-full  !max-w-full'
                id='contry'
                orderAlphabet={true}
                list={contries}
                label={t("COMMON.CONTRY")}
                icon={<Earth className='w-5 h-5' />}
            />

            <Textarea
                id='message'
                className={"min-h-[150]"}
                parentClassName='w-full  !max-w-full'
                label={t("CONTACT.HOWWECANHELP")}
                icon={<Mail className='w-5 col-span-2 h-5' />}
            />

            <Button className={"w-full py-6  mt-4"} variant={"default"}>
                {t("COMMON.SEND")}
                <Send />
            </Button>
        </div>
    )
}

export default ContactSalesThings
