import {Card} from "@/components/ui/card.jsx";

function TimelineComponent() {
    return (
        <>
            {/* Timeline Section */}
            <Card className="p-4">
                {/* Heading Section */}
                <h2 className="text-xl font-bold mb-4 roboto-regular">Timeline</h2>
                {/* Steps Section */}
                <div className="space-y-4">
                    <div className="flex items-center text-orange-400">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-400">
                            ✔️
                        </div>
                        <span className="ml-2 roboto-regular">Restaurant Information</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-400 roboto-regular">
                            2
                        </div>
                        <span className="ml-2 roboto-regular">Menu and Operational Details</span>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default TimelineComponent;