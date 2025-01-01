import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SiGooglemarketingplatform } from "react-icons/si";

function RestaurantPromotionsComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Current Promotions
                            <SiGooglemarketingplatform className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">"Buy 1 Get 1 Free" - Pizza</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">"20% off on orders above $50" - All Items</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantPromotionsComponent;