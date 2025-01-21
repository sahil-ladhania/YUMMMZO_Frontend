import { Card } from "@/components/ui/card";

function CurrentDeliveryDetailsComponent() {
    const deliveryDetails = {
        itemName: "Delicious Pizza",
        deliveryAddress: "123 Pizza St, Flavor Town",
        customerContact: "(123) 456-7890",
    };
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 border-none bg-neutral-900">
                    <h1 className="text-orange-400 text-2xl font-medium">Current Delivery Details</h1>
                    <div className="text-white mt-4 text-sm">
                        <p className="text-md"><strong>Item Name : </strong> {deliveryDetails.itemName}</p>
                        <p className="text-md"><strong>Delivery Address : </strong> {deliveryDetails.deliveryAddress}</p>
                        <p className="text-md"><strong>Customer Contact : </strong> {deliveryDetails.customerContact}</p>
                    </div>
                </Card>
            </section>
        </>
    );
}

export default CurrentDeliveryDetailsComponent;