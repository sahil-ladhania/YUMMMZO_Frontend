import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";

function HowItWorksComponent() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-center mb-8">How It Works?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Step 1 */}
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Step 1</h3>
                        <p className="mb-4">
                            Create your page on Zomato. Help users discover your place by creating a listing on Zomato.
                        </p>
                        <Button variant="outline">Learn More</Button>
                    </Card>

                    {/* Step 2 */}
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Step 2</h3>
                        <p className="mb-4">
                            Register for online ordering. And deliver orders to millions of customers with ease.
                        </p>
                        <Button variant="outline">Learn More</Button>
                    </Card>

                    {/* Step 3 */}
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Step 3</h3>
                        <p className="mb-4">
                            Start receiving orders online. Manage orders on our partner app, web dashboard or API
                            partners.
                        </p>
                        <Button variant="outline">Learn More</Button>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default HowItWorksComponent;