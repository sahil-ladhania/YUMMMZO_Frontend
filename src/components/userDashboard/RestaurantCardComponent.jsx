import {Card} from "@/components/ui/card.jsx";
import { FaStar } from "react-icons/fa";

function RestaurantCardComponent() {
    return (
        <>
            <Card className="p-4 flex flex-col my-4 bg-restaurant-card-gradient border-none cursor-pointer">
                {/* Image Section */}
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/e6c52804-eab5-48c8-a29e-c717ddfc39b2_948065.jpg"
                    alt="Restaurant"
                    className="w-full h-40 object-cover rounded-md"
                />
                {/* Restaurant Details Section */}
                <div className="mt-2">
                    <h2 className="text-lg font-semibold roboto-regular py-1 text-neutral-800">Goila Butter Chicken</h2>
                    <div className="flex items-center py-2">
                        <FaStar className="fill-green-800 mr-1"/>
                        <span className="roboto-regular text-sm font-medium">4.5</span>
                        <span className="mx-2 roboto-regular text-sm font-medium">•</span>
                        <span className="roboto-regular text-sm font-medium">30 min</span>
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
                                <li className="px-1 roboto-regular text-sm font-medium">Sector 18, Noida</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default RestaurantCardComponent;