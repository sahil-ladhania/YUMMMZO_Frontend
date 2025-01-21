import {Card} from "@/components/ui/card.jsx";
import OrderItemComponent from "@/components/deliveryPartnerDashboard/OrderItemComponent.jsx";

function ActiveOrdersOverviewComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 bg-neutral-900 border-none">
                    <h1 className="text-orange-400 text-2xl font-medium mb-6">Active Orders Overview</h1>
                    <div className="rounded-lg p-4">
                        <OrderItemComponent orderId={1} orderStatus="Pending" />
                        <OrderItemComponent orderId={2} orderStatus="Accepted" />
                        <OrderItemComponent orderId={3} orderStatus="In Delivery" />
                    </div>
                </Card>
            </section>
        </>
    );
}

export default ActiveOrdersOverviewComponent;