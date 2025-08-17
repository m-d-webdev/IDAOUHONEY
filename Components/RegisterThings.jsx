"use client";
import React, { useEffect, useState } from 'react'
import { Input, InputCheck } from './ui/input';
import { Lock, LogIn, Mail, MapPin, MoveRight, Phone, User } from 'lucide-react';
import { Button } from './ui/button';
import { GoogleIcon } from './ui/icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import GreatH1 from './Global/GreatH1';
import Loader from './Global/Loader';
import { LoginSocial, Register } from '@/Api/Auth';
import { pa9 } from './MyToast/MyToas';
import { LoginWithGoogle } from '@/lib/firebase';

const RegisterThings = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({ email: "", fullName: "", address: "", phone: "", password: "" })
  const [isLoading, setLoading] = useState(false)
  const [cantSubmit, setcantSubmit] = useState(true);
  const [conditionAccepted, setconditionAccepted] = useState(false);
  const [LoadingSocial, setLoadingSocial] = useState(false)

  useEffect(() => {
    setcantSubmit(
      Object.values(data).some(i => i == "")
      ||
      !conditionAccepted
    )

  }, [conditionAccepted, data])

  const handleSubmit = () => {
    setLoading(true);


    Register({
      ...data
    })
      .then(res => {
        if (window) {
          window.location.href = "/"
        }
      })
      .catch(error => {
        setLoading(false);
        pa9.error("Unable to set up your account at the moment. Please try again later", "Account Creation Failed", {
          withSound: true
        })
      })
  }


  const handleLoginWithGoogle = async () => {
    let res = await LoginWithGoogle();
    if (res) {
      setLoadingSocial(true)
      const { displayName, email, phoneNumber, photoURL } = res

      LoginSocial({
        email,
        fullName: displayName,
        phone: phoneNumber,
        imageUrl: photoURL
      }).then(res2 => {
        setLoadingSocial(false)
        if (window) {
          window.location.href = "/"
        }
      })
        .catch(err => {
          setLoadingSocial(false)
          pa9.error("We couldn’t sign you in with Google. Please try again", 'Google Login Error', {
            withSound: true
          })
        })
    }
  }
  return (
    <div className="w-full px-4">

      <GreatH1>
        {t("LOGIN.CREATE_ACCOUNT")}
      </GreatH1>
      <h3 className=' font-medium mt-2'>{t("LOGIN.REGISTRERSUBTITLE")}</h3>
      <div className=' mt-10 w-full    fit flex items-start justify-center flex-col gap-3'>

        <Input
          id='Full name'
          parentClassName='!max-w-full'
          label={t("COMMON.FULLNAME")}
          onChange={e => setData(pv => ({ ...pv, fullName: e.target.value }))}
          icon={<User className='w-5 h-5' />}
        />

        <Input
          id='Address'
          parentClassName='!max-w-full'
          label={t("COMMON.ADDRESS")}
          onChange={e => setData(pv => ({ ...pv, address: e.target.value }))}
          icon={<MapPin className='w-5 h-5' />}
        />

        <Input
          id='phone'
          parentClassName='!max-w-full'
          onChange={e => setData(pv => ({ ...pv, phone: e.target.value }))}
          label={t("COMMON.PHONE")}
          icon={<Phone className='w-5 h-5' />}
        />

        <Input
          id='email'
          parentClassName='!max-w-full'
          onChange={e => setData(pv => ({ ...pv, email: e.target.value }))}
          label={t("LOGIN.email")}
          icon={<Mail className='w-5 h-5' />}
        />

        <Input
          id='password'
          parentClassName='!max-w-full'
          label={t("LOGIN.password")}
          onChange={e => setData(pv => ({ ...pv, password: e.target.value }))}
          icon={<Lock className='w-5 h-5' />}
          type={"password"}
        />


        <InputCheck
          onChange={e => setconditionAccepted(e.target.checked)}
          label={t("LOGIN.AGREE_CONDITION")}
          type={"checkbox"}
        />

        <Button onClick={handleSubmit} disabled={isLoading || cantSubmit} variant={"default"} className={" mt-4 w-full"}>
          {t("COMMON.NEXT")}
          <MoveRight />
          {
            isLoading &&
            <Loader />

          }
        </Button>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-[40%] p-[1] bg-foreground/20"></div>
          or
          <div className="w-[40%] p-[1] bg-foreground/20"></div>
        </div>
        <Button onClick={handleLoginWithGoogle} disabled={LoadingSocial} variant={"outline"} className={"w-full py-6"}>
          <GoogleIcon className="w-4 h-4" />
          {t("LOGIN.signupwithgoogle")}
          {
            LoadingSocial &&
            <Loader />
          }
        </Button>
      </div>
      <h2 className='mb-2 mt-10 font-medium text-sm opacity-90'>
        {t("LOGIN.IFALREADYHAVEACCOUND")} :
      </h2>
      <Link href={"/login"} className={" w-full"}>
        <Button variant={"secondary"} className={" w-full"} >
          {t("LOGIN.LOGINTOACCOUNT")}
          <LogIn />
        </Button>
      </Link>
    </div>


  )
}

export default RegisterThings
