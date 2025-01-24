import { Button } from "../ui/button";

function MenuItemComponent({ image, name, price , description }) {
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-800 text-neutral-400">
                {/* Image and Details Section */}
                <div className="flex items-center space-x-4">
                    <img
                        className="w-20 h-20 object-cover rounded-md"
                        src={image}
                        alt={name}
                    />
                    <div>
                        <h3 className="text-lg text-white font-semibold">{name}</h3>
                        <p className="text-neutral-300 text-md">{price}</p>
                        <p className="text-sm text-neutral-300 w-auto text-justify">
                            {description}
                        </p>
                    </div>
                </div>
                {/* Quantity Section */}
                <div className="flex items-center space-x-2">
                    <Button className="bg-red-700 text-white px-3 py-1 rounded-md hover:bg-red-700 w-12">
                        -
                    </Button>
                    <span className="text-lg font-semibold">0</span>
                    <Button className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-700 w-12">
                        +
                    </Button>
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;