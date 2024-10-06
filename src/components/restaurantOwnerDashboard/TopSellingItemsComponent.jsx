import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function TopSellingItemsComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Top-Selling Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b py-2">1. Pizza - 150 orders</li>
                            <li className="border-b py-2">2. Burger - 120 orders</li>
                            <li className="border-b py-2">3. Pasta - 90 orders</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default TopSellingItemsComponent;