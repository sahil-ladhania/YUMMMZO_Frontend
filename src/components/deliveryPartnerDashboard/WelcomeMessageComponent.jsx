import { Card } from "@/components/ui/card";

function WelcomeMessageComponent() {
    return (
        <>
            <Card className="mb-6 p-4">
                <h1 className="text-2xl font-bold">Welcome to Your Dashboard!</h1>
                <p className="text-gray-600">Here you can manage your deliveries and stay updated on your tasks.</p>
            </Card>
        </>
    );
}

export default WelcomeMessageComponent;