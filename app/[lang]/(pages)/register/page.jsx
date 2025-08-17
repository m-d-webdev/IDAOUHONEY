import RegisterThings from "@/Components/RegisterThings"
const page = () => {
    return (
        <div
            className="w-full h-[90vh]  flex items-center justify-center"
        >
            <div className="w-full border border-foreground/15 p-8  max-w-[600] rounded-lg">
 
                <RegisterThings />
            </div>
        </div>
    )
}

export default page


