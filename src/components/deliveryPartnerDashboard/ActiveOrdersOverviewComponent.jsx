import {Card} from "@/components/ui/card.jsx";
import OrderItemComponent from "@/components/deliveryPartnerDashboard/OrderItemComponent.jsx";

function ActiveOrdersOverviewComponent() {
    return (
        <>
            <Card className="mb-6 p-4">
                <h1 className="text-xl font-semibold">Active Orders Overview</h1>
                <div className="border border-gray-200 rounded-lg p-4">
                    <OrderItemComponent orderId={1} orderStatus="Pending" />
                    <OrderItemComponent orderId={2} orderStatus="Accepted" />
                    <OrderItemComponent orderId={3} orderStatus="In Delivery" />
                </div>
            </Card>
        </>
    );
}

export default ActiveOrdersOverviewComponent;