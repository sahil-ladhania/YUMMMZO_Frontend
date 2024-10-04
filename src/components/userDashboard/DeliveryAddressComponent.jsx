import {Button} from "@/components/ui/button.jsx";

function DeliveryAddressComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium">Select Delivery Address</h4>
                <div className="flex flex-col mt-2">
                    <Button variant="outline" className="mb-2">
                        Choose Existing Address
                    </Button>
                    <Button variant="primary">
                        Add New Address
                    </Button>
                </div>
            </div>
        </>
    );
}

export default DeliveryAddressComponent;