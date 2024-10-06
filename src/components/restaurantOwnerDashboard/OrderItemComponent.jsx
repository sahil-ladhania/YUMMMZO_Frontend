import {Button} from "@/components/ui/button.jsx";

function OrderItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between border p-4 rounded-md">
                <div>
                    <p>Order ID: 12345</p>
                    <p>Status: Pending</p>
                    <p>Amount: $50.00</p>
                </div>
                <Button className="mx-2">View Details</Button>
            </div>
        </>
    );
}

export default OrderItemComponent;