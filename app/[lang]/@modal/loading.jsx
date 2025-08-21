import Dialog from '@/Components/Global/Dialog'

const loading = () => {
    return (
        <Dialog>

            <div className="!w-[400] h-[410] p-2">
                <div className="animate-pulses bg-accent  w-[200] h-[20] "></div>
                <div className="animate-pulses bg-accent  w-[350] h-[40] mt-4"></div>
                <div className="animate-pulses bg-accent  w-full h-[100] mt-4 "></div>
                <div className="animate-pulses bg-accent  w-[200] h-[20] mt-6 "></div>
                <div className="animate-pulses bg-accent  w-full h-[50] mt-4 "></div>
                <div className="w-full flex justify-evenly">
                    <div className="animate-pulses bg-accent  w-[200] rounded-md  h-[40] mt-8 "></div>
                </div>
            </div>
        </Dialog>
    )
}

export default loading
