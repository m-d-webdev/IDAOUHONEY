"use client"

import { ChevronDown, Plus } from "lucide-react"
import GreatH1 from "../Global/GreatH1"
import { useState } from "react"

const FAQ_QUESTION = ({ Question, Aswer }) => {
    const [QuestionOpen, setQuestionOpen] = useState(false)
    return (
        <div onClick={() => setQuestionOpen(!QuestionOpen)} className="w-full duration-150 flex flex-col  items-start p-2 rounded-md bg-accent border border-foreground/10 justify-start">

            <div className="flex gap-2 items-center justify-between  w-full  ">
                <div className="flex gap-2 items-center  w-10/12  ">
                    <Plus className="opacity-60" />
                    <h1 className="font-medium  tracking-tight ">{Question}</h1>
                </div>
                
                <ChevronDown className={`opacity-60 ${QuestionOpen ?"rotate-180":""} duration-200`} />
            </div>
            <p className={`${QuestionOpen ? "" : "truncate"}  text-sm w-full pl-3 mt-2`}>{Aswer}</p>
        </div>
    )
}

const FAQ_PART = () => {
    return (
        <div className="w-full mt-10 flex p-4 min-h-screen  items-center justify-center">
            <div className="w-full flex justify-evenly flex-wrap max-w-[1500]">
                <div className="flex flex-col ">
                    <GreatH1 className={"!text-3xl text-nowrap"}>Frequently Asked Questions</GreatH1>
                    <div className="w-full bg-foreground/15 mt-4 h-[5]"></div>
                    <div className="w-4/6 bg-foreground/10 opacity-70 mt-4 h-[5]"></div>
                    <img className="w-[300]" src="/media/4456190_2348982-removebg-preview.png" alt="" />
                </div>

                <div className="flex w-[40%] flex-col gap-3 items-start  ">

                    <FAQ_QUESTION
                        Question={"Is your honey 100% natural?"}
                        Aswer={"Yes. Our honey is raw, pure, and free from any additives or artificial flavors. It comes directly from trusted beekeepers."}
                    />
                    <FAQ_QUESTION
                        Aswer={"All our honey is sourced in Morocco, known for its rich floral diversity and long beekeeping tradition."}
                        Question={"Where does your honey come from?"}
                    />
                    <FAQ_QUESTION
                        Question={"How should I store the honey?"}
                        Aswer={"Keep it in a cool, dry place away from direct sunlight. Natural honey may crystallize, but this is normal and a sign of purity. You can place the jar in"}
                    />
                    <FAQ_QUESTION
                        Aswer={"Yes. We offer fast and secure delivery across Morocco, with packaging designed to protect your jar."}
                        Question={"Do you deliver nationwide?"}
                    />
                    <FAQ_QUESTION
                        Aswer={"hildren over 1 year old can safely enjoy our honey. (We don’t recommend honey for infants under 12 months.)"}
                        Question={"Can children eat your honey?"}
                    />
                </div>

            </div>

        </div>
    )
}

export default FAQ_PART
