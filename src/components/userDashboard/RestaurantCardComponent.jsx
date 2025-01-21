import {Card} from "@/components/ui/card.jsx";
import { FaStar } from "react-icons/fa";

function RestaurantCardComponent({ restaurantImage , restaurantName , area , city , priceForTwo }) {

    // Merging Location
    const location = `${area} , ${city}`;

    return (
        <>
            <Card className="p-4 flex flex-col my-4 bg-restaurant-card-gradient border-none cursor-pointer">
                {/* Image Section */}
                <img
                    src={restaurantImage}
                    alt="Restaurant"
                    className="w-full h-40 object-cover rounded-md"
                />
                {/* Restaurant Details Section */}
                <div className="mt-2">
                    <h2 className="text-lg font-semibold roboto-regular py-1 text-neutral-800">{restaurantName}</h2>
                    <div className="flex items-center py-2">
                        <FaStar className="fill-green-800 mr-1"/>
                        <span className="roboto-regular text-sm font-medium">4.5</span>
                        <span className="mx-2 roboto-regular text-sm font-medium">•</span>
                        <span className="roboto-regular text-sm font-medium">30 min</span>
                        <span className="mx-2 roboto-regular text-sm font-medium">•</span>
                        <span className="roboto-regular text-sm font-medium">Price : {priceForTwo}.Rs</span>
                    </div>
                    <div>
                        <div className="flex text-sm roboto-regular">
                            <p className="font-semibold mr-2">Cuisines : </p>
                            <ul className="flex">
                                <li className="px-1 roboto-regular text-sm font-medium">Italian ,</li>
                                <li className="px-1 roboto-regular text-sm font-medium">Fast Food</li>
                            </ul>
                        </div>
                        <div className="flex text-sm roboto-regular">
                            <p className="font-semibold mr-2">Location : </p>
                            <ul className="flex">
                                <li className="px-1 roboto-regular text-sm font-medium">{location}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default RestaurantCardComponent;