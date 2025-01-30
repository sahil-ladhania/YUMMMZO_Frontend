import {Card} from "@/components/ui/card.jsx";
import OrderItemComponent from "@/components/deliveryPartnerDashboard/OrderItemComponent.jsx";

function ActiveOrdersOverviewComponent() {

    return (
        <>
            <section className="p-6 mb-40">
                <Card className="mb-6 p-6 bg-neutral-900 border-none">
                    <h1 className="text-orange-400 text-2xl font-medium mb-6">Active Delivery</h1>
                    <div className="rounded-lg p-4">
                        <OrderItemComponent/>
                    </div>
                </Card>
            </section>
        </>
    );
}

export default ActiveOrdersOverviewComponent;