import FiltersContainerComponent from "@/components/userDashboard/FiltersContainerComponent.jsx";
import RestaurantsContainerComponent from "@/components/userDashboard/RestaurantsContainerComponent.jsx";

function Restaurants() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading Section */}
                <h1 className="text-4xl py-4 text-orange-400 roboto-regular font-bold my-6">
                    Popular Restaurants Near You
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