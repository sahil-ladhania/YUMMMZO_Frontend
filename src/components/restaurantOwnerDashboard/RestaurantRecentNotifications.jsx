import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import { MdNotificationsActive } from "react-icons/md";

function RestaurantRecentNotifications() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Recent Notifications
                            <MdNotificationsActive className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">New customer feedback received</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">Order #124 - Delivery delay notification</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">Promotional campaign results available</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantRecentNotifications;