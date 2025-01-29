import WelcomeMessageComponent from "@/components/deliveryPartnerDashboard/WelcomeMessageComponent.jsx";
import DeliveryStatsOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveryStatsOverviewComponent.jsx";
import ActiveOrdersOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveriesOverviewComponent.jsx";
import RecentNotificationsComponent from "@/components/deliveryPartnerDashboard/RecentNotificationsComponent.jsx";
import { useSelector } from "react-redux";
import LandingPageComponent from "@/components/common/LandingPageComponent";

function PartnerHome() {

    // useSelector
    const { isAuthenticated , user } = useSelector((store) => store.auth);
    const role = user ? user.role : null;

    return (
        <>
            {
                    isAuthenticated && role === "COURIER" ?
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <WelcomeMessageComponent/>
                        <DeliveryStatsOverviewComponent/>
                        <ActiveOrdersOverviewComponent/>
                        <RecentNotificationsComponent/>
                    </div>
                    :
                    <LandingPageComponent/>
            }
        </>
    );
}

export default PartnerHome;