import OrderItemComponent from "@/components/restaurantOwnerDashboard/OrderItemComponent.jsx";

function OrderListComponent() {
    return (
        <>
            <div className="space-y-4 mb-4">
                {/* Placeholder for OrderItem components */}
                <OrderItemComponent/>
                <OrderItemComponent/>
                <OrderItemComponent/>
            </div>
        </>
    );
}

export default OrderListComponent;