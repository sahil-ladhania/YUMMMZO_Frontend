import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

function RestaurantRecentNotifications() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b py-2">New customer feedback received</li>
                            <li className="border-b py-2">Order #124 - Delivery delay notification</li>
                            <li className="border-b py-2">Promotional campaign results available</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantRecentNotifications;