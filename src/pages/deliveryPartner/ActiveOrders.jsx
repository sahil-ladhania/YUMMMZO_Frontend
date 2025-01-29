import DeliveryStatsOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveryStatsOverviewComponent.jsx";
import ActiveOrdersOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveriesOverviewComponent.jsx";

function ActiveOrders() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <DeliveryStatsOverviewComponent/>
                <ActiveOrdersOverviewComponent/>
            </div>
        </>
    );
}

export default ActiveOrders;