import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function RestaurantPromotionsComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Current Promotions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b py-2">"Buy 1 Get 1 Free" - Pizza</li>
                            <li className="border-b py-2">"20% off on orders above $50" - All Items</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantPromotionsComponent;