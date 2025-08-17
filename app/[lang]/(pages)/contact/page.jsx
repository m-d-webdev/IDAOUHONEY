import ContactThings from "@/Components/ContactThings"
const page = () => {
    return (
        <div
            className="w-full h-[90vh]  flex items-center justify-center"
        >
            <div className="w-full border border-foreground/15 p-8  max-w-[600] rounded-lg">
 
                <ContactThings />
            </div>
        </div>
    )
}

export default page


