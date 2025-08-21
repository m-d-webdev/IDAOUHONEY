"use client"
import { useState } from "react"
import "../SubCss.css"
import { useTranslation } from "react-i18next"
import { OpenChatBot } from "../Global/RandomBeTrip"
import { Bot } from "lucide-react"
import { Button } from "../ui/button"
const ChatBotButton = ({ ...props }) => {
    const { t } = useTranslation();
    
    return (
        <>

            <Button onClick={()=>{OpenChatBot()
            }} className="flex  border-none filter-none items-center  gap-2 cursor-pointer font-semibold text-[15px] tracking-tighter animated-text">

                {t("CHATBOT.NAME")}
                <Bot className="w-5 h-5  text-[#0004ff]" />
            </Button>

        </>
    )
}

export default ChatBotButton
