import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"  
import {Button} from "@/components/ui/button.jsx";
import { setClearCart, setTotalItems } from "@/redux/slices/cartSlice";
import { setItemsToOrder } from "@/redux/slices/checkoutSlice";
import { setError, setIsLoading, setIsOrderPlaced, setOrderItems, setOrderPlacedTime, setTotalPrice } from "@/redux/slices/orderSlice";
import { placeOrder } from "@/services/orders/userOrders";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PaymentOptionsComponent() {

    // useNavigate
    const navigate = useNavigate();

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { toPay } = useSelector((store) => store.checkout);
    const { cartItems } = useSelector((store) => store.cart);
    const { userId , restaurantId , orderItems , totalPrice , orderStatus , userAddress , restaurantAddress} = useSelector((store) => store.order);

    // Forming Order Details
    const orderDetails = {
        orderItems : orderItems,
        totalPrice : totalPrice,
        orderStatus : orderStatus,
        userAddress : userAddress,
        restaurantAddress : restaurantAddress
    }

    // Handler Function
    const handlePlaceOrder = async() => {
        try{
            dispatch(setIsLoading(true));
            const response = await placeOrder({ userId , restaurantId , orderDetails });
            if(response){
                dispatch(setIsOrderPlaced(true));
                dispatch(setOrderPlacedTime(response.createdAt));
                dispatch(setItemsToOrder(cartItems));
                dispatch(setClearCart());
                dispatch(setTotalItems());
            }
            setTimeout(() => {
                navigate("/user/order-tracking");
            }, 2000);
        }   
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setIsLoading(false));
        }
    }
    
    // useEffect
    useEffect(() => {
        dispatch(setTotalPrice(toPay));
        const formattedOrderItems = cartItems.map((item) => ({
            menuItemId : item.itemDetails.itemId,
            quantity : item.selectedQuantity,
            itemPrice : item.itemDetails.itemPrice,
            totalPrice : item.selectedQuantity * item.itemDetails.itemPrice
        }));
        console.log(formattedOrderItems);
        dispatch(setOrderItems(formattedOrderItems));
    }, [toPay])

    return (
        <>
            <div className="bg-neutral-100 p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2 text-xl roboto-regular">Payment Options</h3>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button 
                        className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Pay Rs. {toPay}
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
                        <AlertDialogDescription>
                        Are you sure you want to proceed with this payment of Rs. {toPay} ? Once confirmed, the amount will be deducted, and your order will be placed.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handlePlaceOrder}>
                            Confirm Payment
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                {/* UPI Payment */}
                {/* <div className="mb-4">
                    <div className="flex items-center py-4">
                        <h4 className="font-semibold text-md roboto-regular">Pay with UPI</h4>
                        <img className="h-8 ml-2" src="https://logowik.com/content/uploads/images/upi-unified-payments-interface4949.logowik.com.webp" alt="" />
                    </div>
                    <label className="flex items-center roboto-regular">
                        <input type="checkbox" className="mr-2"/>
                        existingupi@example.com
                    </label>
                    <div className="">
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Pay Rs. {toPay}
                        </Button>
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Add New UPI ID
                        </Button>
                    </div>
                </div> */}
                {/* Card Payment */}
                {/* <div className="mb-4">
                    <div className="flex items-center py-4">
                        <h4 className="font-semibold roboto-regular">Pay with Card</h4>
                        <img className="h-4 ml-2" src="https://i.pinimg.com/736x/35/6b/95/356b9546f3f77798b6a76fbc1a1cebf6.jpg" alt="" />
                    </div>
                    <label className="flex items-center roboto-regular">
                        <input type="checkbox" className="mr-2"/>
                        1234 **** **** 5678
                    </label>
                    <div className="">
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Pay Rs. {toPay}
                        </Button>
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Add New Card
                        </Button>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default PaymentOptionsComponent;