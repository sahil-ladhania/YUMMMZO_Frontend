import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { setAddToCart, setDecrementItem, setIncrementItem, setRestaurantId } from "@/redux/slices/cartSlice";

function MenuItemComponent({ itemId , itemAvailableQuantity , image, name, price, description, isPureVeg , isBestSeller }) {

    // Creating Item Object
    const item = {
        itemId : itemId,
        itemName : name,
        itemPrice : price,
        itemQuantityAvailable : itemAvailableQuantity
    }

    // useDispatch and useSelector
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);

    // useParams
    const { restaurantId } = useParams();    

    // Getting Selected Item Quantity 
    const getItemsQuantity = (itemId) => {
        const cartItem = cartItems.find((cartItem) => cartItem.itemDetails.itemId === itemId);
        return cartItem ? cartItem.selectedQuantity : 0;
    }
    const quantity = getItemsQuantity(itemId);

    // Handler Functions
    const handleAddToCart = () => {        
        dispatch(setRestaurantId(restaurantId));
        dispatch(setAddToCart({
            selectedQuantity : 1,
            itemDetails : item
        }))
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
                        quantity === 0 ?
                            <Button 
                                onClick={handleAddToCart}
                                className="bg-orange-400 text-black hover:bg-orange-400 font-semibold"
                            >
                                ADD TO CART
                            </Button>
                            :
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
                    }
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;