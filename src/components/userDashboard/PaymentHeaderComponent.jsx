import {Button} from "@/components/ui/button.jsx";
import { IoCaretBackOutline } from "react-icons/io5";
import { MdPayments } from "react-icons/md";

function PaymentHeaderComponent() {
    return (
        <>
            <div className="flex mb-4 h-14  w-3/12 justify-between items-center px-4">
                <Button className="bg-black h-10 w-16 hover:bg-black">
                    <IoCaretBackOutline className="fill-white"/>
                </Button>
                <div className="flex flex-col bg-neutral-700 px-6 py-4 rounded-lg">
                    <p className="roboto-regular text-orange-400 text-sm font-medium">Number of items : 2</p>
                    <p className="roboto-regular text-orange-400 text-sm font-medium">Total Price : ₹200</p>
                </div>
            </div>
            <div className="py-4">
                <h2 className="text-2xl font-medium roboto-regular text-neutral-300 flex items-center">
                    Payment Options
                    <MdPayments className="ml-4"/>
                </h2>
            </div>
        </>
    );
}

export default PaymentHeaderComponent;