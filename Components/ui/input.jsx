import * as React from "react"

import { cn } from "@/lib/utils"
import { Check, Eye, EyeOff } from "lucide-react";

function Input({
  label = "",
  id = "input",
  className,
  parentClassName = "",
  type,
  placeholder = " ",
  icon,
  ...props
}) {
  const [Thetype, setThetype] = React.useState(type)
  return (
    <div className={`${parentClassName}  ${icon ? "max-w-[380] w-full" : "max-w-[350]"}  w-full  relative flex items-center justify-start   rounded-md   `}>

      <input
        type={Thetype}
        id={id}
        placeholder={placeholder}
        data-slot="input"
        className={cn(
          `file:text-foreground   rounded-[8]
           ${icon ? "ltr:pl-9 rtl:pr-9" : ""} 
            pt-5 border   border-foreground/15 font-semibold tracking-tighter     peer placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex  w-full min-w-0 bg-transparent px-3   text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
          "aria-invalid:ring-destructive/20  dark:aria-invalid:ring-destructive/40",
          className
        )}

        {...props} />
      <label htmlFor={id} className={`px-3  ${icon ? "ltr:left-6 rtl:right-6" : ""}    capitalize absolute duration-150 font-medium tracking-tight peer-focus:text-sm peer-focus:text-ring peer-focus:-translate-y-[10px] peer-placeholder-shown:-translate-y-[0px] peer-placeholder-shown:text-foreground text-ring   !text-sm peer-placeholder-shown:text-base    -translate-y-[10px] `}>{label}</label>
      <div
        className="  opacity-50 absolute duration-150  peer-focus:opacity-100 peer-focus:text-gold    ltr:left-2  rtl:right-2  "
      >

        {
          React.isValidElement(icon) && icon
        }
      </div>
      {
        type == "password" &&
        <div
          onClick={() => {
            setThetype(Thetype == "password" ? "text" : "password")
          }}
          className="absolute cursor-pointer hover2 top-[5] ltr:right-[10]  rtl:left-[10]">
          {Thetype == "password"
            ? <EyeOff className="w-[16] h-[16]" />
            : <Eye className="w-[16] h-[16]" />
          }
        </div>
      }
    </div>

  );
}
function InputCheck({
  label = "",
  id = "inputtrtr",
  className,
  parentClassName = "",
  type,
  placeholder = " ",
  icon,
  ...props
}) {
  return (
    <div className="flex  gap-3 items-center justify-start" >

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-slot="input"
        className={"hidden peer"}

        {...props} />
      <label
        htmlFor={id}
        className="flex  bg-background peer-checked:bg-gold items-center justify-center min-w-[18]  min-h-[18] w-[18]  h-[18] rounded-[3] shadow-gold shadow-sm  border-gold border-2"
      >
        <Check className=" text-white w-4 h-4 stroke-4    " />
      </label>
      <label htmlFor={id} className={` duration-150 font-medium text-sm tracking-tight      `}>{label}</label>

    </div>

  );
}

export { Input, InputCheck }
