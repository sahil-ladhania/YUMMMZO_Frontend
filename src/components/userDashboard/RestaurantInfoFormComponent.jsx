import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function RestaurantInfoFormComponent() {
    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Restaurant Information</h2>
                {/* Restaurant Name Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Restaurant Name</label>
                    <Input placeholder="Enter Restaurant Name" required/>
                </div>
                {/* Owner Details Section */}
                <h3 className="text-lg font-semibold mb-2">Owner Details</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input placeholder="Enter Your Name" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="Enter Your Email" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Contact Number</label>
                    <Input type="tel" placeholder="Enter Your Contact Number" required/>
                </div>
                {/* Map Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Add Your Restaurant's Location</label>
                    <div className="h-40 bg-gray-200 mb-2 flex items-center justify-center">
                        <span className="text-gray-500">[Map Placeholder]</span>
                    </div>
                    <Button variant="outline">Use Current Location</Button>
                </div>
                {/* Restaurant Address Details Section */}
                <h3 className="text-lg font-semibold mb-2">Restaurant Address Details</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Shop No/Building No</label>
                    <Input placeholder="Enter Shop No/Building No" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Floor</label>
                    <Input placeholder="Enter Floor" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Area</label>
                    <Input placeholder="Enter Area" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">City</label>
                    <Input placeholder="Enter City" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Nearby Landmark</label>
                    <Input placeholder="Enter Nearby Landmark" required/>
                </div>
                {/* Combined Button Section */}
                <Button className="mt-4" disabled>
                    Next
                </Button>
            </div>
        </>
    );
}

export default RestaurantInfoFormComponent;