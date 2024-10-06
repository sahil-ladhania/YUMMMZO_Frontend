import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function OrderDetailsComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for order details */}
                    <p>Order ID: 12345</p>
                    <p>Customer Name: John Doe</p>
                    <p>Items: Pizza, Burger</p>
                    <p>Total Amount: $50.00</p>
                    <p>Status: Pending</p>
                </CardContent>
            </Card>
        </>
    );
}

export default OrderDetailsComponent;