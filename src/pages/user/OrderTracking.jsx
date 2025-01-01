import OrderMapComponent from "@/components/userDashboard/OrderMapComponent.jsx";
import OrderTimelineComponent from "@/components/userDashboard/OrderTimelineComponent.jsx";
import OrderDetailsComponent from "@/components/userDashboard/OrderDetailsComponent.jsx";

function OrderTracking() {
    return (
        <>
            <div className="py-8 max-w-7xl mx-auto px-4 bg-neutral-900 my-10 rounded-lg">
                {/* Top Part */}
                <div className="flex">
                    {/* Left Part - Map */}
                    <div className="flex-1 mr-4">
                        <OrderMapComponent/>
                    </div>
                    {/* Right Part - Timeline */}
                    <div className="flex-1 ml-4">
                        <OrderTimelineComponent/>
                    </div>
                </div>

                {/* Bottom Part - Order Details */}
                <div className="mt-14">
                    <OrderDetailsComponent/>
                </div>
            </div>
        </>
    );
}

export default OrderTracking;