import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";

function HowItWorksComponent() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8 roboto-regular text-neutral-300">How It Works?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Step 1 */}
                    <Card className="p-4 bg-how-it-works-card-gradient border-none flex flex-col justify-between">
                        <h3 className="text-lg font-semibold mb-2 roboto-regular">Step 1</h3>
                        <p className="mb-4 text-sm font-medium roboto-regular">
                            Create your page on YUMMMZO. Help users discover your place by creating a listing on YUMMMZO.
                        </p>
                        <Button className="roboto-regular bg-black hover:bg-black">Learn More</Button>
                    </Card>

                    {/* Step 2 */}
                    <Card className="p-4 bg-how-it-works-card-gradient border-none flex flex-col justify-between">
                        <h3 className="text-lg font-semibold mb-2 roboto-regular">Step 2</h3>
                        <p className="mb-4 text-sm font-medium roboto-regular">
                            Register for online ordering. And deliver orders to millions of customers with ease.
                        </p>
                        <Button className="roboto-regular bg-black hover:bg-black">Learn More</Button>
                    </Card>

                    {/* Step 3 */}
                    <Card className="p-4 bg-how-it-works-card-gradient border-none flex flex-col justify-between">
                        <h3 className="text-lg font-semibold mb-2 roboto-regular">Step 3</h3>
                        <p className="mb-4 text-sm font-medium roboto-regular">
                            Start receiving orders online. Manage orders on our partner app, web dashboard or API
                            partners.
                        </p>
                        <Button className="roboto-regular bg-black hover:bg-black">Learn More</Button>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default HowItWorksComponent;