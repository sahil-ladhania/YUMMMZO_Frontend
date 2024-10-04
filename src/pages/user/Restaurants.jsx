import FiltersContainerComponent from "@/components/userDashboard/FiltersContainerComponent.jsx";
import RestaurantsContainerComponent from "@/components/userDashboard/RestaurantsContainerComponent.jsx";

function Restaurants() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading Section */}
                <h1 className="text-2xl font-bold my-4">
                    Restaurants with online food delivery
                </h1>
                {/* Filters Section */}
                <FiltersContainerComponent/>
                {/* Restaurants Sections */}
                <RestaurantsContainerComponent/>
            </div>
        </>
    );
}

export default Restaurants;