import {Button} from "@/components/ui/button.jsx";
import { IoCaretBackOutline } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PaymentHeaderComponent() {

    // useSelector
    const { totalItems } = useSelector((store) => store.cart);
    const { toPay } = useSelector((store) => store.checkout);

    return (
        <>
            <div className="flex mb-4 h-14  w-3/12 justify-between items-center px-4">
                <Link to="/user/checkout">
                    <Button className="bg-black h-10 w-16 hover:bg-black">
                        <IoCaretBackOutline className="fill-white"/>
                    </Button>
                </Link>
                <div className="flex flex-col bg-neutral-700 px-6 py-4 rounded-lg">
                    <p className="roboto-regular text-orange-400 text-sm font-medium">Number of items : {totalItems}</p>
                    <p className="roboto-regular text-orange-400 text-sm font-medium">Total Price : Rs. {toPay}</p>
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