import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IoIosStats } from "react-icons/io";

function RestaurantQuickStatsComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Quick Stats
                            <IoIosStats className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                        <div>
                            <h3 className="font-medium text-lg text-neutral-200">Total Orders Today</h3>
                            <p className="text-sm text-neutral-300 font-medium my-2">35 Orders</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg text-neutral-200">Total Earnings Today</h3>
                            <p className="text-sm text-neutral-300 font-medium my-2">$1200</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg text-neutral-200">Pending Orders</h3>
                            <p className="text-sm text-neutral-300 font-medium my-2">3 Orders</p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantQuickStatsComponent;