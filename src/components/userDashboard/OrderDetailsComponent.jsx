import { Button } from "@/components/ui/button.jsx";
import { useDispatch, useSelector } from "react-redux";

function OrderDetailsComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);
    console.log(cartItems);

    // Handler Functions
    const handleIncrement = () => {
        console.log("Increment");
    };
    
    const handleDecrement = () => {
        console.log("Decrement");
    };

    return (
        <>
            <div className="bg-order-details-gradient p-6 rounded-lg shadow-lg mx-auto">
                <h4 className="font-semibold mb-6 text-black text-xl">Order Summary</h4>
                
                {/* Restaurant Info */}
                <div className="flex items-center mb-6">
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/e6c52804-eab5-48c8-a29e-c717ddfc39b2_948065.jpg"
                        alt="Restaurant"
                        className="rounded-md mr-4 h-20 w-20"
                    />
                    <span className="font-medium text-lg text-black">Goila Butter Chicken</span>
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
                                            <Button onClick={handleDecrement} className="h-10 w-12 roboto-regular">-</Button>
                                            <span className="roboto-regular text-sm">{selectedQuantity}</span>
                                            <Button onClick={handleIncrement} className="h-10 w-12 roboto-regular">+</Button>
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
                        <span className="roboto-regular text-sm font-bold">Rs. 10.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">Delivery Fee</span>
                        <span className="roboto-regular text-sm font-bold">Rs. 2.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">Platform Fee</span>
                        <span className="roboto-regular text-sm font-bold">Rs. 1.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="roboto-regular text-sm font-bold">GST</span>
                        <span className="roboto-regular text-sm font-bold">Rs. 1.20</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-4">
                        <span className="roboto-regular text-md font-bold">To Pay</span>
                        <span className="roboto-regular text-md font-bold">Rs. 14.20</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailsComponent;