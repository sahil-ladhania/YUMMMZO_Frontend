import DeliveryAddressComponent from "@/components/userDashboard/DeliveryAddressComponent.jsx";
import OrderDetailsComponent from "@/components/userDashboard/OrderDetailsComponent.jsx";
import PaymentComponent from "@/components/userDashboard/PaymentComponent.jsx";

function Checkout() {
    return (
        <>
            <div className="py-8 flex max-w-7xl mx-auto px-4">
                {/* Left Side - Steps Timeline */}
                <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Order Steps</h2>

                    {/* Step 1: Choose Delivery Address */}
                    <div className="mb-4">
                        <h3 className="font-semibold">1. Choose Delivery Address</h3>
                        <DeliveryAddressComponent/>
                    </div>

                    {/* Step 2: Payment */}
                    <div>
                        <h3 className="font-semibold">2. Payment</h3>
                        <PaymentComponent/>
                    </div>
                </div>

                {/* Right Side - Order Details Component */}
                <div className="w-2/3 pl-8">
                    <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                    <OrderDetailsComponent/>
                </div>
            </div>
        </>
    );
}

export default Checkout;