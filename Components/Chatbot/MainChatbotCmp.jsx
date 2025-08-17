import { Heading2, ListPlus, Send } from "lucide-react"
import Dialog from "../Global/Dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GreatH1 from "../Global/GreatH1"
import Bee2 from "../lotties/Bee2"
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
    const [val, setVal] = useState("")
    return (
        <Dialog
            onClose={() => setchatBotVISIBLE(false)}
            closeIfClickOutside={false}
            backWhenClose={false}
            containerClassName='w-[400]  relative flex !justify-between !flex-col h-[440]'
        >
            <div className="w-full max-h-[85%]  h-[85%]  ">
                <div className="h-full flex items-center flex-col justify-center">

                    <Bee2 width={110} />

                    <h1 className="font-semibold  tracking-tight">
                        {t('CHATBOT.TITLE')}
                    </h1>
                    <p className="text-center text-sm">
                        {t('CHATBOT.SUBTITLE')}
                    </p>
                </div>
            </div>
            <div className="w-full relative mt-2  flex gap-2">
                <Input
                    value={val}
                    onChange={v => setVal(v.target.value)}
                    id="message"
                    placeholder={t("CHATBOT.WRITE_MSG")}
                    className={"pt-0  py-1  border-foreground/20 rounded-sm"} />
                <Button variant={"default"} className={"cursor-pointer"}>
                    <Send />
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

        </Dialog>
    )
}

export default MainChatbotCmp
