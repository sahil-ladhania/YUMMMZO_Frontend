import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

function PaymentComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium">Payment Method</h4>
                <div className="flex flex-col mt-2">
                    <Link to="/user/payment">
                        <Button>
                            Proceed to Pay
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PaymentComponent;