import { Card, CardContent } from "@/components/ui/card";

function NotificationsListComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardContent>
                    <ul>
                        {/* Sample Notification Item */}
                        <li className="border-b border-gray-200 py-2">
                            <strong>New Order Received</strong> - You have a new order from John Doe.
                        </li>
                        <li className="border-b border-gray-200 py-2">
                            <strong>Inventory Alert</strong> - Low stock on item XYZ.
                        </li>
                        <li className="border-b border-gray-200 py-2">
                            <strong>Weekly Update</strong> - Check out the latest updates.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </>
    );
}

export default NotificationsListComponent;