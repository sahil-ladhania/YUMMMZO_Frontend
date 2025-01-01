import RestaurantCardComponent from "@/components/userDashboard/RestaurantCardComponent.jsx";

function RestaurantsContainerComponent() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
                {/* Restaurants Section */}
                {Array(12).fill(null).map((_, index) => (
                    <RestaurantCardComponent key={index}/>
                ))}
            </div>
        </>
    );
}

export default RestaurantsContainerComponent;