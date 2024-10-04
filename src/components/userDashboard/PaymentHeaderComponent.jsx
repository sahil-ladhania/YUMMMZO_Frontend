import {Button} from "@/components/ui/button.jsx";

function PaymentHeaderComponent() {
    return (
        <>
            <div className="flex items-center mb-4">
                <Button variant="outline" className="mr-4">
                    &larr; {/* Left Arrow */}
                </Button>
                <div>
                    <h2 className="text-lg font-semibold">Payment Options</h2>
                    <p className="text-gray-600">Number of items: 2</p>
                    <p className="text-gray-600">Total Price: ₹200</p>
                </div>
            </div>
        </>
    );
}

export default PaymentHeaderComponent;