import { Geist, IBM_Plex_Sans_Arabic } from "next/font/google";

import "./globals.css";
import I18Provider from "@/Contexts/I18Provider.jsx";
import { GetTrans, locales } from "@/lib/server-i18n";
import IderkaouiToast from "@/Components/MyToast/MyToas";
import Header from "@/Components/layout/Header";
import MainPartBackground from "@/Components/Landing/MainPartBackground";
import UserContext from "@/Contexts/UserContext";
import Footer from "@/Components/layout/Footer";


const iBM_Plex_Sans_Arabic = IBM_Plex_Sans_Arabic({
  weight: "500",
  subsets: ["arabic"]
});

const geist_Mono = Geist({
  // variable: "",
  subsets: ["latin-ext"],
})

export const generateMetadata = async ({ params }) => {
  const { lang } = await params;
  const dict = GetTrans(lang)
  return {
    // title: {
    //   template: `%s | ${dict?.SEO?.HOME?.TITLE}`,
    //   default: dict?.SEO?.HOME?.TITLE
    // },
    description: dict?.SEO?.HOME?.DESCRIPTION
  }
}

export default async function RootLayout({ children, modal, params }) {
  const { lang } = await params
  return (

    <html >
      <head>

      </head>
      <body className={` ${lang == 'ar' ? iBM_Plex_Sans_Arabic.className : geist_Mono.className} flex   flex-col items-center justify-start  `}      >
        <IderkaouiToast />
        <I18Provider>
          <UserContext >

            {/* ------------ */}
            <MainPartBackground />

            <Header />
            
            <div className="w-full  max-w-[1600px]  ">
              {children}
              <div className="z-[999]">

                {modal}
              </div>
              <Footer />
            </div>
          </UserContext>
        </I18Provider>
      </body>
    </html>
  );
}
