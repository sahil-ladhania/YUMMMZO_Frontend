import {Button} from "@/components/ui/button.jsx";

function PartnerWithUsComponent() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Partner with Zomato at 0% commission for the 1st month!</h2>
                <div className="flex justify-center space-x-4">
                    <Button>Register Your Restaurant</Button>
                    <Button variant="outline">Login to View Your Existing Restaurants</Button>
                </div>
            </div>
        </>
    );
}

export default PartnerWithUsComponent;