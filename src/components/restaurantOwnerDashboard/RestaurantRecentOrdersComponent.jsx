import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

function RestaurantRecentOrdersComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b py-2">Order #123 - Pizza - 2x - Delivered</li>
                            <li className="border-b py-2">Order #124 - Burger - 1x - Pending</li>
                            <li className="border-b py-2">Order #125 - Pasta - 3x - In Progress</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantRecentOrdersComponent;