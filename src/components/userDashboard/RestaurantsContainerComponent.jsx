import RestaurantCardComponent from "@/components/userDashboard/RestaurantCardComponent.jsx";

function RestaurantsContainerComponent() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {/* Restaurants Section */}
                {Array(10).fill(null).map((_, index) => (
                    <RestaurantCardComponent key={index}/>
                ))}
            </div>
        </>
    );
}

export default RestaurantsContainerComponent;