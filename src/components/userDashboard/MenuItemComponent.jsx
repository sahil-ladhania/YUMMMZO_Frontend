import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function MenuItemComponent({ image, name, price, description, isPureVeg , isBestSeller }) {
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
                    <Button className="bg-white text-black px-3 py-1 hover:bg-white rounded-md w-12">
                        -
                    </Button>
                    <span className="text-lg text-neutral-300 font-semibold">0</span>
                    <Button className="bg-white text-black px-3 py-1 hover:bg-white rounded-md w-12">
                        +
                    </Button>
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;