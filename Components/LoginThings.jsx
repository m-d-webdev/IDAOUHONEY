"use client";
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import { Goal, Key, Lock, Mail, Send, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { FacebookIcon, GoogleIcon } from './ui/icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import GreatH1 from './Global/GreatH1';
import { Login, LoginSocial } from '@/Api/Auth';
import { pa9 } from './MyToast/MyToas';
import { UseUser } from '@/Contexts/UserContext';
import { useRouter } from 'next/navigation';
import Loader from './Global/Loader';
import { LoginWithGoogle } from '@/lib/firebase';


const LoginThings = ({ onClose = () => { } }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({ password: "", email: "" })
  const { setLoggedIn, setData: SetUsetData } = UseUser();
  const [isLoading, setLoading] = useState(false)
  const [LoadingSocial, setLoadingSocial] = useState(false)


  const Router = useRouter();

  const OnSucessfullyLoggedin = res => {
    setLoggedIn(true)
    SetUsetData(res)
    setLoading(false)
    if (window) {
      window.location.href = "/"
    }
  }

  const OnFailedToLogin = res => {
    setLoading(false)
    pa9.error("We couldn’t verify your credentials.  Double-check your details and try again  ", "Authentication Error", {
      withSound: true,
      buttons: [
        {
          label: "Try again",
          className: "font-semibold tracking-tight p-2 px-6 rounded border border-foreground/10  "
        }
      ]
    });
  }

  const HandleSubmit = async () => {
    setLoading(true)
    await Login(data)
      .then(res => OnSucessfullyLoggedin(res.data))
      .catch(err => OnFailedToLogin(err))
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
        {t("LOGIN.title")}
      </GreatH1>
      <h3 className=' font-medium mt-2'>
        {t("LOGIN.subtitle")}
      </h3>
      {/* <div className="w-full gap-8 grid items-center md:grid-cols-5 grid-cols-1"> */}
      <div className='mt-10 w-full  flex items-start justify-center flex-col gap-3'>
        <Input
          id='email'
          parentClassName='!max-w-full'
          label={t("LOGIN.email")}
          onChange={e => setData(pv => ({ ...pv, email: e.target.value }))}
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
        <Button className={"mt-1 border-none text-accent-foreground"}>
          {t("LOGIN.forgot_password")}
        </Button>

        <Button onClick={HandleSubmit} disabled={(isLoading || data.email == "" || data.password == "")} variant={"default"} className={"relative mt-2 w-full"}>
          {t("LOGIN.submit")}
          <Send />
          {
            isLoading &&
            <Loader asWhite={true} />
          }
        </Button>

      </div>
      <div className="w-full  mt-10 col-span-2 ">
        <h2 className='mb-2 font-medium text-sm opacity-90'>
          {t("LOGIN.continue_with")}
        </h2>
        <Button disabled={LoadingSocial} onClick={handleLoginWithGoogle} variant={"outline"} className={"w-full py-6"}>
          <GoogleIcon className="w-4 h-4" />
          {t("LOGIN.google")}

          {
            LoadingSocial &&
            <Loader asWhite={true} />
          }
        </Button>



        <Button variant={"outline"} className={"mt-3 w-full py-6"}>
          <FacebookIcon className="w-4 h-4" />
          {t("LOGIN.facebook")}

        </Button>


        <h2 className='mb-2 mt-10 font-medium text-sm opacity-90'>
          {t("LOGIN.no_account")}
        </h2>
        <Link href={"/register"} className={" w-full"}>
          <Button variant={"secondary"} className={" w-full"} >
            {t("LOGIN.create_account")}
            <UserPlus />
          </Button>
        </Link>
      </div>

      {/* </div> */}
    </div>


  )
}

export default LoginThings
