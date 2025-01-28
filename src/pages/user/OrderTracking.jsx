import OrderMapComponent from "@/components/userDashboard/OrderMapComponent.jsx";
import OrderTimelineComponent from "@/components/userDashboard/OrderTimelineComponent.jsx";
import ConfirmedOrderDetailsComponent from "@/components/userDashboard/ConfirmedOrderDetailsComponent.jsx";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function OrderTracking() {

    // useSelector
    const { isOrderPlaced } = useSelector((store) => store.order);

    return (
        <>
            {
                isOrderPlaced === true ?
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
                            <ConfirmedOrderDetailsComponent/>
                        </div>
                    </div>
                    :                    
                    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4  rounded-lg">
                        {/* Image in the middle */}
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/confectioner-is-sitting-sad-because-of-no-business-illustration-download-in-svg-png-gif-file-formats--customer-order-expression-sweet-shop-owner-pack-people-illustrations-2252719.png?f=webp"
                            alt="No-Orders"
                            className="mb-4 w-1/2 md:w-1/3"
                        />
                        {/* Heading */}
                        <h1 className="text-2xl font-bold mb-2 roboto-regular text-orange-400">No Orders Yet</h1>
                        {/* Message */}
                        <p className="text-lg mb-4 roboto-regular text-neutral-300">
                            You can go to the restaurants page to view more restaurants.
                        </p>
                        {/* Button */}
                        <Link to="/user/restaurants">
                            <Button className="mt-2 bg-white text-black hover:bg-white">
                            Go and Order
                            </Button>
                        </Link>
                    </div>
            }
        </>
    );
}

export default OrderTracking;