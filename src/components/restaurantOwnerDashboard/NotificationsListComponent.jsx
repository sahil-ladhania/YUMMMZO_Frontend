import { Card, CardContent } from "@/components/ui/card";

function NotificationsListComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardContent>
                    <ul>
                        {/* Sample Notification Item */}
                        <li className="border-b border-gray-200 py-4 text-neutral-300 text-sm">
                            <strong>New Order Received</strong> - You have a new order from John Doe.
                        </li>
                        <li className="border-b border-gray-200 py-4 text-neutral-300 text-sm">
                            <strong>Inventory Alert</strong> - Low stock on item XYZ.
                        </li>
                        <li className="border-b border-gray-200 py-4 text-neutral-300 text-sm">
                            <strong>Weekly Update</strong> - Check out the latest updates.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </>
    );
}

export default NotificationsListComponent;