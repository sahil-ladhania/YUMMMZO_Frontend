import { Card } from "@/components/ui/card";
import DeliveryStatComponent from "@/components/deliveryPartnerDashboard/DeliveryStatComponent.jsx";

function DeliveryStatsOverviewComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 bg-neutral-900 border-none text-white p-6">
                    <h1 className="text-orange-400 text-2xl font-medium mb-6">Delivery Stats Overview</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DeliveryStatComponent title="Total Deliveries" value={120} />
                        <DeliveryStatComponent title="Pending Orders" value={5} />
                        <DeliveryStatComponent title="Completed Orders" value={115} />
                    </div>
                </Card>
            </section>
        </>
    );
}

export default DeliveryStatsOverviewComponent;