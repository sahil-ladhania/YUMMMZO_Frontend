import { useDispatch, useSelector } from "react-redux";
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
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { setAddToCart, setClearCart, setDecrementItem, setIncrementItem, setRestaurantId, setTotalItems } from "@/redux/slices/cartSlice";
import { setRestaurantIdForCheckout } from "@/redux/slices/checkoutSlice";
import { useEffect, useState } from "react";

function MenuItemComponent({ itemId , itemAvailableQuantity , image, name, price, description, isPureVeg , isBestSeller }) {

    // Creating Item Object
    const item = {
        itemId : itemId,
        itemName : name,
        itemPrice : price,
        itemQuantityAvailable : itemAvailableQuantity
    }

    // useNavigate
    const navigate = useNavigate();

    // useDispatch and useSelector
    const dispatch = useDispatch();
    const { cartItems , restaurantIdForCart } = useSelector((store) => store.cart);
    const { isAuthenticated } = useSelector((store) => store.auth);

    // useParams
    const { restaurantId } = useParams();    

    // Getting Selected Item Quantity 
    const getItemsQuantity = (itemId) => {
        const cartItem = cartItems.find((cartItem) => cartItem.itemDetails.itemId === itemId);
        return cartItem ? cartItem.selectedQuantity : 0;
    }
    const quantity = getItemsQuantity(itemId);

    // State Variables 
    const [showAlertDialog, setShowAlertDialog] = useState(false);

    // Handler Functions
    const handleAddToCart = () => {
        if(restaurantIdForCart === null){
            dispatch(setRestaurantId(restaurantId));
            dispatch(setRestaurantIdForCheckout(restaurantId));
            dispatch(setAddToCart({
                selectedQuantity : 1,
                itemDetails : item
            }));
        }
        else if(restaurantIdForCart === restaurantId){
            dispatch(setAddToCart({
                selectedQuantity : 1,
                itemDetails : item
            }));
        }
        else{
            setShowAlertDialog(true);
        }
    }

    const handleIncrement = () => {
        dispatch(setIncrementItem({
            itemId: item.itemId,
            selectedQuantity: quantity 
        }));
    };
    
    const handleDecrement = () => {
        dispatch(setDecrementItem({
            itemId: item.itemId,
            selectedQuantity: quantity
        }));
    };

    const handleClearCart = () => {
        dispatch(setRestaurantId(null));
        dispatch(setClearCart());
    }

    const navigateToLoginScreen = () => {
        setTimeout(() => {
            navigate("/user/login");
        }, 2000);
    }

    // useEffect
    useEffect(() => {
        dispatch(setTotalItems());
    }, [cartItems]);

    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-800 text-neutral-400">
                {/* Image and Details Section */}
                <div className="flex items-center space-x-4 w-9/12">
                    <div className="relative w-20 h-20 flex-shrink-0">
                        {/* Item Image */}
                        <img
                            className="w-full h-full object-cover rounded-md"
                            src={image}
                            alt={name}
                        />
                        {/* Veg/Non-Veg Icon */}
                        <img
                            className="absolute top-1 right-1 w-5 h-5 p-0.5"
                            src={
                                isPureVeg
                                    ? "https://freesvg.org/img/1531813273.png"
                                    : "https://freesvg.org/img/1531813245.png"
                            }
                            alt={isPureVeg ? "Veg" : "Non-Veg"}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg text-white font-semibold">{name}</h3>
                        {
                            isBestSeller === true ?
                                <Badge className="bg-orange-400 text-black hover:bg-orange-400">BESTSELLER</Badge>
                                :   
                                null
                        }
                        <div className="flex w-24 justify-between items-center my-2">
                            <p className="text-neutral-300 text-md">Rs. {price}</p>
                        </div>
                        <p className="text-sm text-neutral-300 text-justify">
                            {description}
                        </p>
                    </div>
                </div>
                {/* Quantity Section */}
                <div className="flex items-center space-x-2 w-2/12">
                {
                    quantity === 0 ? (
                        <>
                            {
                                isAuthenticated === true ?
                                    <Button 
                                    onClick={handleAddToCart}
                                    className="bg-orange-400 h-10 w-32 rounded-md text-black hover:bg-orange-400 font-semibold"
                                    >
                                        ADD TO CART
                                    </Button>
                                    :
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="bg-orange-400 h-10 w-32 rounded-md text-black hover:bg-orange-400 font-semibold">ADD TO CART</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Login Required</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                You need to be logged in to add items to your cart. Please log in to continue.
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={navigateToLoginScreen}>Login</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                            }
                            {
                                showAlertDialog && (
                                    <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-red-800">
                                                    Items from Different Restaurants Cannot Be Added!
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Your cart already contains items from another restaurant. To add items from this restaurant, you need to clear your existing cart first. Would you like to proceed?
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Keep Current Items
                                                </AlertDialogCancel>
                                                <AlertDialogAction onClick={handleClearCart}>
                                                    Clear Cart & Proceed
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                )
                            }
                        </>
                    ) 
                    : 
                    (
                        <>
                            <Button 
                                onClick={handleDecrement}   
                                className="bg-white text-black px-3 py-1 hover:bg-white rounded-md w-12"
                            >
                                -
                            </Button>
                            <span className="text-lg text-neutral-300 font-semibold">{quantity}</span>
                            <Button 
                                onClick={handleIncrement}
                                className="bg-white text-black px-3 py-1 hover:bg-white rounded-md w-12"
                            >
                                +
                            </Button>
                        </>
                    )
            }
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;