import DeliveryAddressComponent from "@/components/userDashboard/DeliveryAddressComponent.jsx";
import OrderDetailsComponent from "@/components/userDashboard/OrderDetailsComponent.jsx";
import PaymentComponent from "@/components/userDashboard/PaymentComponent.jsx";
import { CiCircleInfo } from "react-icons/ci";

function Checkout() {
    return (
        <>
            <div className="py-8 flex max-w-7xl mx-auto px-4 bg-neutral-900 rounded-lg my-10">
                {/* Left Side - Steps Timeline */}
                <div className="w-1/3 bg-neutral-800 p-4 rounded-lg shadow-md flex flex-col justify-start">
                    <h2 className="text-2xl font-medium mb-4 roboto-regular text-orange-400">Order Steps</h2>
                    {/* Step 1: Choose Delivery Address */}
                    <div className="mb-4">
                        <h3 className="roboto-regular text-sm text-white my-4">1. Choose Delivery Address</h3>
                        <DeliveryAddressComponent/>
                    </div>
                    {/* Step 2: Payment */}
                    <div>
                        <h3 className="roboto-regular text-sm text-white my-4">2. Payment</h3>
                        <PaymentComponent/>
                    </div>
                </div>
                {/* Right Side - Order Details Component */}
                <div className="w-2/3 pl-8 bg-neutral-800 ml-2 rounded-lg">
                    <div className="p-4">
                        <h2 className="text-lg text-orange-400 font-medium mb-4 roboto-regular flex items-center">
                            Order Details
                            <CiCircleInfo className="ml-2"/>
                        </h2>
                        <OrderDetailsComponent/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;