import * as React from "react"

import { cn } from "@/lib/utils"

function Input2({
  label = "",
  id = "input",
  className,
  parentClassName = "",
  type,
  placeholder = " ",
  ...props
}) {
  return (
    <div className={`${parentClassName}  w-full  relative flex items-center justify-start   rounded-md   `}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-slot="input"
        className={cn(
          `file:text-foreground  rounded
            border  py-1 placeholder:text-sm border-border font-medium tracking-tight     peer placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex  w-full min-w-0 bg-transparent px-3   text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        )}

        {...props} />
    </div>

  );
}

export { Input2 }
