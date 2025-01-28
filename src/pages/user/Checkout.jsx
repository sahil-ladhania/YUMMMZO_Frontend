import DeliveryAddressComponent from "@/components/userDashboard/DeliveryAddressComponent.jsx";
import OrderDetailsComponent from "@/components/userDashboard/OrderDetailsComponent.jsx";
import PaymentComponent from "@/components/userDashboard/PaymentComponent.jsx";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";
import { getAllAddressesForUser } from "@/services/userAddress/userAddressService";
import { setRestaurantIdForOrder, setSavedAddresses, setUserIdForOrder } from "@/redux/slices/orderSlice";

function Checkout() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { cartItems , restaurantIdForCart } = useSelector((store) => store.cart);
    const { selectedAddress } = useSelector((store) => store.order);
    const { user } = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;


    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getAllUserAddress = async() => {
            try {
                const userAddresses = await getAllAddressesForUser(userId);
                if(isMounted){
                    dispatch(setSavedAddresses(userAddresses));
                    dispatch(setUserIdForOrder(userId));
                    dispatch(setRestaurantIdForOrder(parseInt(restaurantIdForCart)));
                }
            } 
            catch(error){
                console.log(error);
            }
        }
        getAllUserAddress();
        return () => {
            isMounted = false;
        }
    }, [])


    return (
        <>
            {
                cartItems.length === 0 ?
                    <EmptyCart/>
                    :
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
                        {
                            selectedAddress === "" ?
                                <div>

                                </div>
                            :
                                <div>
                                    <h3 className="roboto-regular text-sm text-white my-4">2. Payment</h3>
                                    <PaymentComponent/>
                                </div>
                        }
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
            }
        </>
    );
}

export default Checkout;