import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import { MdPayment } from "react-icons/md";

function PaymentComponent() {
    return (
        <>
            <div className="shadow bg-neutral-700 roboto-regular p-4 rounded-lg">
                <h4 className="text-sm text-neutral-300">Payment Method</h4>
                <div className="flex flex-col mt-2">
                    <Link to="/user/payment">
                        <Button className="bg-black hover:bg-black">
                            Proceed to Pay
                            <MdPayment className="ml-2"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PaymentComponent;