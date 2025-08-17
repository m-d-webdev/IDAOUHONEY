"use client"

import { CartIcon } from "@/Components/icons"
import Link from "next/link"

const CartButton = () => {
    return (
        <Link href={"/cart"} className="relative">
            <CartIcon className={"stroke-1 w-[30] h-[30]"} />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-[18] text-white font-semibold h-[18] text-center text-xs">8</span>
        </Link>
    )
}

export default CartButton
