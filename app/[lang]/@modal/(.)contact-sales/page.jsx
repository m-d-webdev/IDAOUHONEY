"use server";
import ContactSalesThings from "@/Components/ContactSalesThings";
import Dialog from "@/Components/Global/Dialog"
const page = () => {
    return (
        <Dialog
            closeIfClickOutside={false}
            containerClassName="w-full max-w-[600] "
            backWhenClose={true}
        >
            <ContactSalesThings />
        </Dialog>
    )
}

export default page


