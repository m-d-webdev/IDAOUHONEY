"use server";
import ContactThings from "@/Components/ContactThings";
import Dialog from "@/Components/Global/Dialog"
const page = () => {
    return (
        <Dialog
            containerClassName="w-full max-w-[600] "
            backWhenClose={true}
        >
            <ContactThings />
        </Dialog>
    )
}

export default page


