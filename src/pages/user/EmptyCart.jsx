import {Button} from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4  rounded-lg">
                {/* Image in the middle */}
                <img
                    src="https://cdn.accelot.in/uploads/other_images/empty-shopping-cart-v3.webp"
                    alt="Empty Cart"
                    className="mb-4 w-1/2 md:w-1/3"
                />

                {/* Heading */}
                <h1 className="text-2xl font-bold mb-2 roboto-regular text-orange-400">Your cart is empty</h1>

                {/* Message */}
                <p className="text-lg mb-4 roboto-regular text-neutral-300">
                    You can go to the restaurants page to view more restaurants.
                </p>

                {/* Button */}
                <Link to="/user/restaurants">
                    <Button className="mt-2 bg-white text-black hover:bg-white">
                        See Restaurants Near You
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default EmptyCart;