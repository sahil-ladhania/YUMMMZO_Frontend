import {Button} from "@/components/ui/button.jsx";

function PaymentComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium">Payment Method</h4>
                <div className="flex flex-col mt-2">
                    <Button>
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </>
    );
}

export default PaymentComponent;