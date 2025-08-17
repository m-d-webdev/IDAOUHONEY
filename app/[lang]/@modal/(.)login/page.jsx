"use server";
import Dialog from "@/Components/Global/Dialog"
import LoginThings from "@/Components/LoginThings";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
    const data = await cookies()
    if (data.get("isLoggedIn")?.value == "true") {
        redirect("/")
    };
    return (
        <Dialog
            containerClassName="w-full max-w-[550] "
            backWhenClose={true}
        >
            <LoginThings />
        </Dialog>
    )
}

export default page


