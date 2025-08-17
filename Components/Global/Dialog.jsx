"use client";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation"
import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";
const Dialog = ({
    children,
    onClose = () => { },
    containerClassName = "",
    closeIfClickOutside = true,
    withCloseButton = true,
    backWhenClose = false
}) => {
    const Router = useRouter()

    const [isOpen, setOpen] = useState(true);
    const PageRef = useRef();
    let time1;


    const HandelClose = () => {
        clearTimeout(time1);
        setOpen(false);
        time1 = setTimeout(() => {
            document.body.classList.remove("overflow-hidden")
            if (backWhenClose) {
                Router.back()
            } else {
                onClose()
            }
        }, 200)


    }

    const handleClickOutside = (e) => {

        if (!closeIfClickOutside) return;
        if (!PageRef.current?.contains(e.target)) {
            HandelClose()
        }

    };

    useEffect(() => {
        document.body.classList.add("overflow-hidden")
        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [])

    return (
        <div style={{zIndex:"990"}} onClick={handleClickOutside} className='fixed overflow-auto inset-0 p-4  bg-foreground/20 top-0 left-0 w-screen h-screen flex items-center justify-center'>

            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        ref={PageRef}

                        initial={{
                            scale: .95,
                            opacity: 0
                        }}
                        exit={{
                            scale: .98,
                            opacity: 0,
                            transition: {
                                // ease: "easeInOut",
                                duration: .2,
                                type: "keyframes"
                            }
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                // ease: "easeInOut",
                                duration: .2,
                                type: "keyframes"
                            }
                        }}
                        className={`${containerClassName}  relative !pt-7 bg-background p-4 rounded-md border border-foreground/40  max-h-full overflow-auto`}
                    >
                        {
                            withCloseButton &&
                            <Button
                                onClick={HandelClose}
                                size={"icon"} className={"absolute  !rounded-sm top-0 right-0 hover:bg-red-500 hover:text-white "}><X /></Button>
                        }
                        {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Dialog
