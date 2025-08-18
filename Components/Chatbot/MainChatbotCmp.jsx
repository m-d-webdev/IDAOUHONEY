import { Heading2, ListPlus, Send } from "lucide-react"
import Dialog from "../Global/Dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GreatH1 from "../Global/GreatH1"
import Bee2 from "../lotties/Bee2"
import { GetAnswerFromAI } from "@/Api/ChatBot"
import Loader from "../Global/Loader"
import { Geist } from "next/font/google";

const geist_Mono = Geist({
    // variable: "",
    subsets: ["latin-ext"],
})

import ReactMarkDown from "react-markdown"
const SuggestionList = ({ onClose, onChoose }) => {
    const { t, i18n } = useTranslation()
    const PageRef = useRef();

    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const MainSuggesionsList = [
        {
            en: "Where can I buy honey in Idaoutanane?",
            fr: "Où puis-je acheter du miel à Idaoutanane ?",
            ar: "أين يمكنني شراء العسل في إداوتنان؟"
        },
        {
            en: "Is the honey from Idaoutanane natural?",
            fr: "Le miel d'Idaoutanane est-il naturel ?",
            ar: "هل العسل من إداوتنان طبيعي؟"
        },
        {
            en: "What types of honey are produced in Idaoutanane?",
            fr: "Quels types de miel sont produits à Idaoutanane ?",
            ar: "ما هي أنواع العسل المنتجة في إداوتنان؟"
        },
        {
            en: "How is honey harvested in Idaoutanane?",
            fr: "Comment le miel est-il récolté à Idaoutanane ?",
            ar: "كيف يتم جمع العسل في إداوتنان؟"
        },
        {
            en: "What are the health benefits of Idaoutanane honey?",
            fr: "Quels sont les bienfaits pour la santé du miel d'Idaoutanane ?",
            ar: "ما هي فوائد عسل إداوتنان الصحية؟"
        }
    ]
    return (
        <motion.div
            ref={PageRef}
            initial={{
                height: 0,
                opacity: 0
            }}
            exit={{
                height: 0,
                opacity: 0
            }}
            animate={{
                height: 200,
                opacity: 1
            }}
            className="h-[200] p-2 border border-foreground/20 overflow-auto scrl_none w-full absolute bottom-0 left-0 bg-background rounded-md drop-shadow-md"
        >

            <GreatH1 className={"text-base !tracking-tighter !font-extrabold"}>{t("COMMON.SUGGESTIONS")}</GreatH1>
            <div className="flex max-h-[86%] mt-2 flex-col gap-2 tracking-tight  overflow-auto">
                {
                    MainSuggesionsList.map((q, i) =>
                        <h2
                            onClick={() => onChoose(q[i18n.language])}
                            className="hover:underline opacity-80 cursor-pointer hover:opacity-100">
                            {q[i18n.language]}
                        </h2>
                    )
                }
            </div>
        </motion.div>
    )
}

const MainChatbotCmp = ({ setchatBotVISIBLE }) => {
    const { t } = useTranslation();
    const [SuggestionListopen, setSuggestionListOpen] = useState(false)
    const [val, setVal] = useState("");
    const [loading, setloading] = useState(false);
    const [oldChats, setoldChats] = useState([]);
    const [listChat, setlistChat] = useState([]);
    const [quetionSent, setquetionSent] = useState([]);
    const [ErrorAnswring, setErrorAnswring] = useState([]);
    const [NormalWith, setNormalWith] = useState(400);
    const [normalHeight, setnormalHeight] = useState(200);
    const lisRef = useRef();


    const handleGetAnswerFromAi = async () => {
        if (listChat.length == 0) {
            setNormalWith(500)
            setnormalHeight(500)
        }
        setlistChat(pv => ([...pv, { content: val, mine: true }]))
        setquetionSent(val)
        setVal("")
        setloading(true)
        GetAnswerFromAI({
            clientQuestion: val,
            oldChats
        })
            .then(res => {
                const { id, reply } = res;
                console.log(res);
                setlistChat(pv => ([...pv, { content: reply, mine: false, id }]))
                setloading(false);


            })
            .catch(error => {
                setErrorAnswring(true)
                setloading(false);
            })
    }


    useEffect(() => {
        lisRef.current?.scrollTo({
            top: lisRef.current?.scrollHeight,
            behavior: "smooth"
        })
    }, [listChat]);

    return (
        <Dialog
            onClose={() => setchatBotVISIBLE(false)}
            closeIfClickOutside={false}
            backWhenClose={false}

            containerClassName={`!w-fit !h-fit duration-200  relative flex !justify-between !flex-col `}
        >
            <div
                style={{
                    width: `${NormalWith}px`,
                    height: `${normalHeight}px`,
                }}
                className="w-full duration-200 flex flex-col gap-4   max-h-[85%]  h-[85%]  ">
                {
                    listChat.length == 0

                        ? <div className="h-full flex items-center flex-col justify-center">

                            <Bee2 width={110} />

                            <h1 className="font-semibold  tracking-tight">
                                {t('CHATBOT.TITLE')}
                            </h1>
                            <p className="text-center text-sm">
                                {t('CHATBOT.SUBTITLE')}
                            </p>
                        </div>
                        : <div dir="ltr" ref={lisRef} className="max-h-full pb-10 w-full overflow-auto scrl_none">
                            {
                                listChat.map((c, i) =>
                                    <div key={i} className={`${c.mine ? "" : "flex items-end justify-end"} mt-4`}>{
                                        c.mine
                                            ? <div style={{
                                                filter: `drop-shadow(0 0 2px var(--filter-color))`
                                            }} className="bg-accent max-w-[90%] w-fit rounded-md !rounded-tl-none   p-2"><p className="tracking-tight">{c.content}</p></div>
                                            :
                                            <pre
                                                style={{
                                                    whiteSpace: "pre-wrap",       // يحافظ على \n
                                                    wordBreak: "break-word",      // يكسر الكلمات الطويلة
                                                    overflowWrap: "break-word",   // دعم إضافي للكسر
                                                }}
                                                className={`p-2 max-w-[95%] font-medium tracking-tight bg-blue-100/30 rounded-md  ${geist_Mono.className}`}
                                            >
                                                {c.content}
                                            </pre>
                                    }</div>
                                )
                            }
                            {
                                loading &&
                                <div className="w-full flex items-end mt-8 gap-2 justify-end flex-col">
                                    <div className="w-[40%] bg-border rounded-sm h-[20] animate-pulse "></div>
                                    <div className="w-[60%] bg-border rounded-sm h-[70] animate-pulse "></div>
                                </div>
                            }
                        </div>
                }
            </div >
            <div className="w-full relative mt-2  flex gap-2">
                <Input
                    value={val}
                    onChange={v => setVal(v.target.value)}
                    id="message"
                    placeholder={t("CHATBOT.WRITE_MSG")}
                    className={"pt-0  py-1  border-foreground/20 rounded-sm"} />
                <Button onClick={handleGetAnswerFromAi} disabled={val == "" || val.length <= 1} variant={"default"} className={"cursor-pointer w-[60]"}>
                    {
                        loading
                            ? <Loader withBackground={false} asWhite={true} />
                            : <Send />
                    }
                </Button>
                <Button onClick={() => setSuggestionListOpen(true)} className={"cursor-pointer"}>
                    <ListPlus />
                </Button>


                <AnimatePresence>
                    {
                        SuggestionListopen &&
                        <SuggestionList
                            onClose={() => setSuggestionListOpen(false)}
                            onChoose={
                                (v) => {
                                    setVal(v)
                                    setSuggestionListOpen(false)
                                }
                            }
                        />
                    }
                </AnimatePresence>


            </div>

        </Dialog >
    )
}

export default MainChatbotCmp
