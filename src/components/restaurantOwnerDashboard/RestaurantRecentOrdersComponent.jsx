import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import { MdRecentActors } from "react-icons/md";

function RestaurantRecentOrdersComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Recent Orders
                            <MdRecentActors className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">Order #123 - Pizza - 2x - Delivered</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">Order #124 - Burger - 1x - Pending</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">Order #125 - Pasta - 3x - In Progress</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantRecentOrdersComponent;