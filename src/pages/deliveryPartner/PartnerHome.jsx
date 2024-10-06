import WelcomeMessageComponent from "@/components/deliveryPartnerDashboard/WelcomeMessageComponent.jsx";
import DeliveryStatsOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveryStatsOverviewComponent.jsx";
import ActiveOrdersOverviewComponent from "@/components/deliveryPartnerDashboard/ActiveOrdersOverviewComponent.jsx";
import RecentNotificationsComponent from "@/components/deliveryPartnerDashboard/RecentNotificationsComponent.jsx";

function PartnerHome() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <WelcomeMessageComponent/>
                <DeliveryStatsOverviewComponent/>
                <ActiveOrdersOverviewComponent/>
                <RecentNotificationsComponent/>
            </div>
        </>
    );
}

export default PartnerHome;