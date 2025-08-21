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
import { RobotIcon } from "../icons"

const geist_Mono = Geist({
    // variable: "",
    subsets: ["latin-ext"],
})


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
            setNormalWith(550)
            setnormalHeight(500)
        };



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
        if (localStorage.getItem("AI_listChat")) {
            const STORED_CHAT = localStorage.getItem("AI_listChat");
            setlistChat(JSON.parse(STORED_CHAT))
            setNormalWith(550)
            setnormalHeight(500)
        };
    }, []);


    const handdleChnageVal = e => {
        
        if (e.key == "Enter" && val != "") {
            handleGetAnswerFromAi()
        }

    }

    useEffect(() => {
        lisRef.current?.scrollTo({
            top: lisRef.current?.scrollHeight,
            behavior: "smooth"
        });

        setoldChats(
            listChat
                .slice(listChat.length - 7, listChat.length)
                .map(i => i.mine
                    ? {
                        role: "user",
                        content: i.content
                    }
                    : {
                        role: "assistant",
                        content: i.content
                    }

                )


        );
        if (listChat.length > 0) {
            localStorage.setItem("AI_listChat", JSON.stringify(listChat))
        }
    }, [listChat]);

    return (
        <Dialog
            onClose={() => setchatBotVISIBLE(false)}
            closeIfClickOutside={false}
            backWhenClose={false}

            containerClassName={`!w-fit !p-1 !h-fit duration-200  relative flex !justify-between !flex-col `}
        >
            <div
                style={{
                    width: `${NormalWith}px`,
                    height: `${normalHeight}px`,
                }}
                className="w-full relative duration-200 p-2 flex flex-col gap-4   max-h-[85%] bg-accent h-[85%]  ">
                <img src="https://i.pinimg.com/736x/45/87/db/4587dba198ee103cf89c1f9c8828a1f4.jpg" className="absolute opacity-20 dark:hidden w-full h-full top-0 left-0 object-cover" alt="" />
                <img src="https://i.pinimg.com/1200x/0a/40/04/0a40044ffa8d69ba5005cb3cbb77fbff.jpg" className="absolute  hidden dark:block opacity-20 w-full h-full top-0 left-0 object-cover" alt="" />
                {
                    listChat.length == 0

                        ? <div className="h-full z-[2] flex items-center flex-col justify-center">

                            <Bee2 width={110} />

                            <h1 className="font-semibold  tracking-tight">
                                {t('CHATBOT.TITLE')}
                            </h1>
                            <p className="text-center text-sm">
                                {t('CHATBOT.SUBTITLE')}
                            </p>
                        </div>
                        : <div dir="ltr" ref={lisRef} className="max-h-full pb-10 w-full overflow-auto scrl_none z-[2] ">
                            {
                                listChat.map((c, i) =>
                                    <div key={i} className={`${c.mine ? "flex items-end justify-end" : ""} mt-6`}>{
                                        c.mine
                                            ? <div style={{
                                                filter: `drop-shadow(0 0 2px var(--filter-color))`
                                            }} className="bg-accent max-w-[90%] bg-gradient-to-br to-[#9c0ca3] from-[#0378fe] text-white w-fit rounded-md !rounded-tr-none   p-2">
                                                <p className="tracking-tight font-medium">{c.content}</p>
                                            </div>
                                            :
                                            <div className="flex items-start justify-start gap-2 max-w-[95%] ">
                                                <div className="min-w-[42] w-[42] flex items-center justify-center h-[42] border border-foreground/30 rounded-full">
                                                    <RobotIcon className={'min-w-[30] w-[30] h-[30]'} />
                                                </div>
                                                <pre
                                                    style={{
                                                        filter: `drop-shadow(0 0 2px var(--filter-color))`,
                                                        whiteSpace: "pre-wrap",
                                                        wordBreak: "break-word",
                                                        overflowWrap: "break-word",
                                                    }}
                                                    className={`p-4 mt-2 font-medium bg-background !rounded-tl-none  rounded-md tracking-tight   ${geist_Mono.className}`}
                                                >
                                                    {c.content}
                                                </pre>
                                            </div>
                                    }</div>
                                )
                            }
                            {
                                loading &&
                                <div className=" flex items-sy-tart mt-8 gap-2 justify-start flex-col">
                                    <div className="w-[40%] bg-border rounded-sm h-[20] animate-pulse "></div>
                                    <div className="w-[60%] bg-border rounded-sm h-[70] animate-pulse "></div>
                                    <p className="font-medium opacity-50 tracking-tighter">{t("CHATBOT.inWaiting")}</p>
                                </div>  
                            }
                        </div>
                }
            </div >

            <div className="w-full z-[2] relative mt-2  flex gap-2">
                <Input
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    onKeyUp={handdleChnageVal}
                    id="message"
                    parentClassName="max-w-none"
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
