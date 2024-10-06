import { Card } from "@/components/ui/card";

function CurrentDeliveryDetailsComponent() {
    const deliveryDetails = {
        itemName: "Delicious Pizza",
        deliveryAddress: "123 Pizza St, Flavor Town",
        customerContact: "(123) 456-7890",
    };
    return (
        <>
            <Card className="mb-6 p-4">
                <h1 className="text-xl font-semibold">Current Delivery Details</h1>
                <p className="mt-2"><strong>Item Name:</strong> {deliveryDetails.itemName}</p>
                <p><strong>Delivery Address:</strong> {deliveryDetails.deliveryAddress}</p>
                <p><strong>Customer Contact:</strong> {deliveryDetails.customerContact}</p>
            </Card>
        </>
    );
}

export default CurrentDeliveryDetailsComponent;