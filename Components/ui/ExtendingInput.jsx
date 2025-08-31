'use client'

import { useRef, useState } from "react"


const ExtendingInput = ({ TheWidth, value = "", onChange = () => { }, TheHeight, className = "", type = "text", placeholder = "", id = "someId", ...props }) => {
    const [isFocused, setFocused] = useState(false);

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const handleFocus = (open = false) => {
        PageRef.current?.focus()
        if (open) {
            setFocused(true);
            setHeight(TheHeight ? TheHeight : 100)
            setWidth(TheWidth ? TheWidth : 200)
            return
        }

        if (value != "" && value != null) {
            setFocused(true);
            setHeight(TheHeight ? TheHeight : 100)
            setWidth(TheWidth ? TheWidth : 200)
            return;
        }
        setFocused(false);
        setHeight(0)
        setWidth(0)


    }

    const PageRef = useRef();
    const handleClickOutside = (e) => {
        handleFocus()
    };

    return (
        <div
            onClick={() => handleFocus(true)}
            className="bg-background overflow-hidden relative p-2 border border-foreground/15 rounded-xl "
        >
            <p className={` font-medium tracking-tight cursor-pointer text-nowrap ${isFocused ? "opacity-60  text-sm mb-2" : ""}   duration-300`}>{placeholder}</p>

            <textarea
                ref={PageRef}
                style={{
                    height,
                    width,
                    padding: 0,

                }}
                onBlur={handleClickOutside}
                onChange={onChange}
                className={`${className} ${isFocused ? "" : ""} font-semibold  scrl_none duration-500 border-none outline-none  resize-none tracking-tight`}
                {...props}
            ></textarea>

        </div>
    )
}

export default ExtendingInput
