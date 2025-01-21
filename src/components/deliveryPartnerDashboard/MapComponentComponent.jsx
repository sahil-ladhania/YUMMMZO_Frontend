import {Card} from "@/components/ui/card.jsx";

function MapComponentComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 border-none bg-neutral-900">
                    <h2 className="text-orange-400 text-2xl font-medium mb-4">Delivery Route</h2>
                    <div className="h-64 bg-neutral-800 flex items-center justify-center rounded-md">
                        <p className="text-gray-500">Map showing route to delivery address</p>
                    </div>
                </Card>
            </section>
        </>
    );
}

export default MapComponentComponent;