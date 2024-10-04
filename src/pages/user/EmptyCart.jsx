import {Button} from "@/components/ui/button.jsx";

function EmptyCart() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                {/* Image in the middle */}
                <img
                    src="https://w7.pngwing.com/pngs/91/848/png-transparent-empty-cart-illustration-thumbnail.png"
                    alt="Empty Cart"
                    className="mb-4 w-1/2 md:w-1/3"
                />

                {/* Heading */}
                <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>

                {/* Message */}
                <p className="text-lg mb-4">
                    You can go to the home page to view more restaurants.
                </p>

                {/* Button */}
                <Button className="mt-2" onClick={() => window.location.href = '/home'}>
                    See Restaurants Near You
                </Button>
            </div>
        </>
    );
}

export default EmptyCart;