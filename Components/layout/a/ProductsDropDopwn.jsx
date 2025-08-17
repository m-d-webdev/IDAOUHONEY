"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

const honeyTypes = [
    {
        title: {
            en: "Thyme Honey",
            ar: "عسل الزعتر",
            fr: "Miel de Thym"
        },
        description: {
            en: "Aromatic mountain honey known for its antibacterial properties.",
            ar: "عسل عطري من الجبال معروف بخصائصه المضادة للبكتيريا.",
            fr: "Miel aromatique de montagne reconnu pour ses propriétés antibactériennes."
        },
        href: "/products/zaatar"
    },
    {
        title: {
            en: "Euphorbia Honey (Daghmous)",
            ar: "عسل الدغموس",
            fr: "Miel d’Euphorbe (Daghmous)"
        },
        description: {
            en: "Strong, bitter honey used for respiratory health.",
            ar: "عسل قوي ومرّ يُستخدم لصحة الجهاز التنفسي.",
            fr: "Miel fort et amer utilisé pour la santé respiratoire."
        },
        href: "/products/daghmous"
    },
    {
        title: {
            en: "Orange Blossom Honey",
            ar: "عسل زهر البرتقال",
            fr: "Miel de Fleur d'Oranger"
        },
        description: {
            en: "Light, sweet honey that helps with relaxation and sleep.",
            ar: "عسل خفيف وحلو يساعد على الاسترخاء والنوم.",
            fr: "Miel doux et léger qui aide à la détente et au sommeil."
        },
        href: "/products/limon"
    },

    {
        title: {
            en: "Carob Honey",
            ar: "عسل الخروب",
            fr: "Miel de Caroube"
        },
        description: {
            en: "Dark, rich honey that boosts energy and iron.",
            ar: "عسل داكن وغني يعزز الطاقة والحديد.",
            fr: "Miel foncé et riche qui stimule l’énergie et le fer."
        },
        href: "/products/kharoub"
    },
    {
        title: {
            en: "Eucalyptus Honey",
            ar: "عسل الكاليتوس",
            fr: "Miel d’Eucalyptus"
        },
        description: {
            en: "Menthol-flavored honey good for coughs and breathing.",
            ar: "عسل بنكهة النعناع مفيد للسعال والتنفس.",
            fr: "Miel au goût mentholé utile contre la toux et pour la respiration."
        },
        href: "/products/kalitos"

    }
];

const ProductsDropDopwn = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className="w-[550px] grid gap-4  grid-cols-2">
            {
                honeyTypes.map((h, i) =>
                    <Link key={i} href={h.href} className="flex group items-start justify-start flex-col  w-full">
                        <h1
                            style={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                            className="font-medium bg-gradient-to-r from-[#DAA520]  to-[#5C3317] text-base   ">
                            {h.title[i18n.language]}
                        </h1>
                        <p className="text-sm group-hover:opacity-100 duration-200 opacity-60">{h.description[i18n.language]}</p>
                    </Link>)
            }
        </div>
    )
}

export default ProductsDropDopwn
