import { Card } from "@/components/ui/card";
import DeliveryStatComponent from "@/components/deliveryPartnerDashboard/DeliveryStatComponent.jsx";

function DeliveryStatsOverviewComponent() {
    return (
        <>
            <Card className="mb-6 p-4">
                <h1 className="text-xl font-semibold">Delivery Stats Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <DeliveryStatComponent title="Total Deliveries" value={120} />
                    <DeliveryStatComponent title="Pending Orders" value={5} />
                    <DeliveryStatComponent title="Completed Orders" value={115} />
                </div>
            </Card>
        </>
    );
}

export default DeliveryStatsOverviewComponent;