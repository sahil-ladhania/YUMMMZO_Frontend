import {Button} from "@/components/ui/button.jsx";

function PaymentOptionsComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Payment Options</h3>
                {/* Cash on Delivery (COD) */}
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2"/>
                        Cash on Delivery
                    </label>
                    <Button variant="primary" className="mt-2">
                        Pay ₹200
                    </Button>
                </div>
                {/* UPI Payment */}
                <div className="mb-4">
                    <h4 className="font-semibold">Pay with UPI</h4>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2"/>
                        existingupi@example.com
                    </label>
                    <Button variant="primary" className="mt-2">
                        Pay
                    </Button>
                    <Button variant="outline" className="mt-2">
                        Add New UPI ID
                    </Button>
                </div>
                {/* Card Payment */}
                <div className="mb-4">
                    <h4 className="font-semibold">Pay with Card</h4>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2"/>
                        1234 **** **** 5678
                    </label>
                    <Button variant="primary" className="mt-2">
                        Pay
                    </Button>
                    <Button variant="outline" className="mt-2">
                        Add New Card
                    </Button>
                </div>
            </div>
        </>
    );
}

export default PaymentOptionsComponent;