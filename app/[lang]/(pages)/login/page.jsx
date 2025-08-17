import LoginThings from "@/Components/LoginThings"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
const page = async () => {
    const data = await cookies()
    if (data.get("isLoggedIn")?.value == "true") {
        return redirect("/")
    }
    return (
        <div
            className="w-full h-[90vh]  flex items-center justify-center"
        >
            <div className="w-full border border-foreground/15 p-8  max-w-[600] rounded-lg">

                <LoginThings />
            </div>
        </div>
    )
}

export default page


