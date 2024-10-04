import {Card} from "@/components/ui/card.jsx";

function RestaurantCardComponent() {
    return (
        <>
            <Card className="p-4 flex flex-col">
                {/* Image Section */}
                <img
                    src="https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017785.png"
                    alt="Restaurant"
                    className="w-full h-32 object-cover rounded-md"
                />
                {/* Restaurant Details Section */}
                <div className="mt-2">
                    <h2 className="text-lg font-semibold">La Pino'z Pizza</h2>
                    <div className="flex items-center mt-1">
                        <span className="text-yellow-500">⭐</span>
                        <span>4.5</span>
                        <span className="mx-2">•</span>
                        <span>30 min</span>
                    </div>
                    <p className="text-sm">Cuisines: Italian, Fast Food</p>
                    <p className="text-sm">Location: Sector 18, Noida</p>
                </div>
            </Card>
        </>
    );
}

export default RestaurantCardComponent;