
function RestaurantInfoComponent() {
    return (
        <>
            <div className="mb-6">
                <h1 className="text-4xl font-bold">Harilal's</h1>
                <p className="text-lg text-gray-600">Mithai, South Indian, Street Food, North Indian, Chinese, Fast
                    Food, Bakery</p>
                <p className="text-sm text-gray-500">Golambar, Patna</p>
                <div className="flex items-center space-x-4 mt-2">
                    <span className="text-green-600 font-bold">4.3★</span>
                    <span className="text-gray-600">18.4K Delivery Ratings</span>
                    <span className="text-sm text-gray-500">For orders under 4 km</span>
                </div>
            </div>
        </>
    );
}

export default RestaurantInfoComponent;