import PartnerWithUsComponent from "@/components/userDashboard/PartnerWithUsComponent.jsx";
import WhyPartnerWithZomatoComponent from "@/components/userDashboard/WhyPartnerWithZomatoComponent.jsx";
import HowItWorksComponent from "@/components/userDashboard/HowItWorksComponent.jsx";

function AddRestaurant() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                <PartnerWithUsComponent/>
                <WhyPartnerWithZomatoComponent/>
                <HowItWorksComponent/>
            </div>
        </>
    );
}

export default AddRestaurant;