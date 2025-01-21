import { Card } from "@/components/ui/card";

function OrderItemComponent({ orderId, orderStatus }) {
    return (
        <>
            <Card className="p-4 bg-neutral-800 rounded-lg flex justify-between items-center border-none mb-4 text-white">
                <div>
                    <p className="font-semibold">Order ID: {orderId}</p>
                    <p className="text-neutral-400">Status: {orderStatus}</p>
                </div>
                <button className="bg-white text-black px-3 py-1 rounded">View Details</button>
            </Card>
        </>
    );
}

export default OrderItemComponent;