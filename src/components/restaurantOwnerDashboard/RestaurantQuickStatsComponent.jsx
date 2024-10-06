import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function RestaurantQuickStatsComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                        <div>
                            <h3 className="font-bold">Total Orders Today</h3>
                            <p>35 Orders</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Total Earnings Today</h3>
                            <p>$1200</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Pending Orders</h3>
                            <p>3 Orders</p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantQuickStatsComponent;