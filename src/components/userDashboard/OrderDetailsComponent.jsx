import {Button} from "@/components/ui/button.jsx";

function OrderDetailsComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium mb-4">Order Summary</h4>

                {/* Restaurant Info */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Restaurant"
                        className="rounded-md mr-4"
                    />
                    <span className="font-semibold">Restaurant Name</span>
                </div>

                {/* Items List */}
                <div className="mb-4">
                    <h5 className="font-semibold">Items</h5>
                    <div className="flex justify-between items-center">
                        <span>Item Name</span>
                        <div className="flex items-center">
                            <Button variant="outline" className="px-2">-</Button>
                            <span className="mx-2">1</span>
                            <Button variant="outline" className="px-2">+</Button>
                            <span className="ml-2">$10.00</span>
                        </div>
                    </div>
                    {/* Repeat for more items */}
                </div>

                {/* Bill Details */}
                <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between">
                        <span>Item Total</span>
                        <span>$10.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>$2.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Platform Fee</span>
                        <span>$1.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>GST</span>
                        <span>$1.20</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <span>To Pay</span>
                        <span>$14.20</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailsComponent;