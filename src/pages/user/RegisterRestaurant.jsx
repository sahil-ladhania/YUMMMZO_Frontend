import TimelineComponent from "@/components/userDashboard/TimelineComponent.jsx";
import RestaurantInfoFormComponent from "@/components/userDashboard/RestaurantInfoFormComponent.jsx";
import MenuInfoFormComponent from "@/components/userDashboard/MenuInfoFormComponent.jsx";

function RegisterRestaurant() {
    return (
        <>
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8">
                {/* Timeline Section */}
                <div className="w-full md:w-1/3 mb-8 md:mr-8">
                    <TimelineComponent/>
                </div>
                {/* Details Section */}
                <div className="w-full md:w-2/3">
                    <RestaurantInfoFormComponent/>
                    <MenuInfoFormComponent/>
                </div>
            </div>
        </>
    );
}

export default RegisterRestaurant;