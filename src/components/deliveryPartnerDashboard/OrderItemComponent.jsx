import { Card } from "@/components/ui/card";

function OrderItemComponent({ orderId, orderStatus }) {
    return (
        <>
            <Card className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                <div>
                    <p className="font-semibold">Order ID: {orderId}</p>
                    <p className="text-gray-600">Status: {orderStatus}</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">View Details</button>
            </Card>
        </>
    );
}

export default OrderItemComponent;