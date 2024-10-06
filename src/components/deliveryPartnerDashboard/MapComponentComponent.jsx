import {Card} from "@/components/ui/card.jsx";

function MapComponentComponent() {
    return (
        <>
            <Card className="mb-6 p-4">
                <h2 className="text-xl font-semibold">Delivery Route</h2>
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Map showing route to delivery address</p>
                </div>
            </Card>
        </>
    );
}

export default MapComponentComponent;