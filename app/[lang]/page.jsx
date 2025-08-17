import Card1 from "@/Components/Global/Card1";
import GreatImageAnimation from "@/Components/Global/GreatImageAnimation";
import HoneyBottleCha from "@/Components/Landing/HoneyBottleCha";
import MainComponents from "@/Components/Landing/MainComponents";
import MainHoneyBottle from "@/Components/Landing/MainHoneyBottle";
import MainPartBackground from "@/Components/Landing/MainPartBackground";
import Reviews from "@/Components/Landing/Reviews";
import VideoInroPart from "@/Components/Landing/VideoInroPart";
import { GetTrans } from "@/lib/server-i18n";
import Image from "next/image";

export const generateMetadata = async ({ params }) => {
  const { lang } = await params
  const dict = GetTrans(lang);
  return {
    // title: dict?.SEO.HOME.TITLE,
    // description: dict?.SEO.HOME.DESCRIPTION,
  }
}

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = GetTrans(lang);

  return (
    <div className=" flex relative flex-col items-center justify-start ">
      <MainComponents />
      <div className="w-full z-[2] items-end  flex px-10 justify-between">
        <div className=""></div>
        <Card1
          title={dict?.MAIN?.CARD?.TITLE}
          subtitles={[dict?.MAIN?.CARD?.SUBTITLE]}
          buttonText={dict?.MAIN?.CARD?.BUTTONTEXT}
          parentClassName=" md:w-[340] "
          setGreatH1={true}
        />

        <div className=""></div>
        <MainHoneyBottle />
      </div>
      <HoneyBottleCha />
      <VideoInroPart />
      <Reviews />
      </div>
  );
}
