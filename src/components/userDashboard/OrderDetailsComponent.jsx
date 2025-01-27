import { Button } from "@/components/ui/button.jsx";
import { setDecrementItem, setIncrementItem } from "@/redux/slices/cartSlice";
import { setGST, setItemsTotal, setRestaurantImageForCheckout, setRestaurantNameForCheckout, setToPay } from "@/redux/slices/checkoutSlice.js";
import { getARestaurant } from "@/services/restaurants/restaurantFeed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderDetailsComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);
    const { restaurantIdForCheckout , restaurantName , restaurantImage , itemsTotal , deliveryFee , platformFee , gst , toPay } = useSelector((store) => store.checkout);

    // Calculating the Items Total
    const calculateItemsTotal = (cartItems) => {
        let total = 0;
        cartItems.forEach(cartItem => {
            total = (cartItem.selectedQuantity * cartItem.itemDetails.itemPrice) + total;
        });
        dispatch(setItemsTotal(total));
        return total;
    }
    const totalItemsCost = calculateItemsTotal(cartItems);    

    // Calculating the GST For Total Items Cost
    const calculateGST = (totalItemsCost) => {
        let gstPercent = 5;
        let totalGSTForOrder = (totalItemsCost * gstPercent / 100);
        dispatch(setGST(totalGSTForOrder));
        return totalGSTForOrder;
    }
    calculateGST(totalItemsCost);

    // Calculating the Total Amount to Pay
    const calculateTotalAmountToPay = (itemsTotal , deliveryFee , platformFee , gst) => {
        let totalToPay = (itemsTotal + deliveryFee + platformFee + gst);
        dispatch(setToPay(totalToPay));
        return totalToPay;
    }
    calculateTotalAmountToPay(itemsTotal , deliveryFee , platformFee , gst);

    // Handler Functions
    const handleIncrement = (itemId, selectedQuantity) => {
        dispatch(setIncrementItem({
            itemId: itemId,
            selectedQuantity: selectedQuantity 
        }));
    };
    
    const handleDecrement = (itemId, selectedQuantity) => {
        dispatch(setDecrementItem({
            itemId: itemId,
            selectedQuantity: selectedQuantity
        }));
    };

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getRestaurant = async() => {
            try {
                const restaurantDetails = await getARestaurant({restaurantId : restaurantIdForCheckout});
                if(isMounted){
                    dispatch(setRestaurantNameForCheckout(restaurantDetails.restaurantName));
                    dispatch(setRestaurantImageForCheckout(restaurantDetails.restaurantImage));
                }
            }
            catch(error){
                console.log(error);
            }
        }
        getRestaurant();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <>
            <div className="bg-order-details-gradient p-6 rounded-lg shadow-lg mx-auto">
                <h4 className="font-semibold mb-6 text-black text-xl">Order Summary</h4>
                
                {/* Restaurant Info */}
                <div className="flex items-center mb-6">
                    <img
                        src={restaurantImage}
                        alt="Restaurant"
                        className="rounded-md mr-4 h-20 w-20"
                    />
                    <span className="font-medium text-lg text-black">{restaurantName}</span>
                </div>

                {/* Items List */}
                <div className="mb-6">
                    <h5 className="font-medium text-lg text-black">Items</h5>
                    <div className="space-y-4">
                    {cartItems.map((cartItem) => {
                            const { itemId, itemName, itemPrice } = cartItem.itemDetails;
                            const { selectedQuantity } = cartItem;
                            
                            return (
                                <div key={itemId} className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-sm font-semibold text-black w-5/12">{itemName}</span>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-32 flex items-center justify-between">
                                            <Button onClick={() => handleDecrement(itemId, selectedQuantity)} className="h-10 w-12 roboto-regular">-</Button>
                                            <span className="roboto-regular text-sm">{selectedQuantity}</span>
                                            <Button onClick={() => handleIncrement(itemId, selectedQuantity)} className="h-10 w-12 roboto-regular">+</Button>
                                        </div>
                                        <span className="ml-2 roboto-regular text-sm font-semibold w-20">Rs. {itemPrice * selectedQuantity}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bill Details */}
                <div className="border-t border-black mt-6 pt-4">
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">Item Total</span>
                        <span className="roboto-regular text-sm font-bold">Rs. {itemsTotal}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">Delivery Fee</span>
                        <span className="roboto-regular text-sm font-bold">Rs. {deliveryFee}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">Platform Fee</span>
                        <span className="roboto-regular text-sm font-bold">Rs. {platformFee}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">GST (5%)</span>
                        <span className="roboto-regular text-sm font-bold">Rs. {gst}</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-4">
                        <span className="roboto-regular text-md font-bold">To Pay</span>
                        <span className="roboto-regular text-md font-bold">Rs. {toPay}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailsComponent;