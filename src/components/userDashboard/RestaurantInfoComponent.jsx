import { FaStar } from "react-icons/fa6";

function RestaurantInfoComponent({restaurantDetails}) {

    // Retrieving Restaurant Details
    const { restaurantName , buildingNumber , area , city } = restaurantDetails ?? {};
    const restaurantAddress = `${buildingNumber}, ${area} , ${city}`;

    return (
        <>
            <div className="mb-6">
                <h1 className="text-5xl mb-4 font-bold text-orange-400">{restaurantName}</h1>
                <p className="text-md text-neutral-300">
                    Mithai , South Indian , Street Food , North Indian , Chinese , Fast Food , Bakery
                </p>
                <p className="text-sm text-neutral-400">
                    {restaurantAddress}
                </p>
                <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center">
                        <span className="text-green-800  font-semibold">4.3</span>
                        <FaStar className="fill-green-800 ml-1"/>
                    </div>
                    <span className="text-neutral-300 text-md">18.4K Delivery Ratings</span>
                    <span className="text-sm text-neutral-300">For orders under 4 km</span>
                </div>
            </div>
        </>
    );
}

export default RestaurantInfoComponent;