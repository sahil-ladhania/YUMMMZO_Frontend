import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function NotificationDetailsComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Notification Details</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for notification details */}
                    <div className="h-48 bg-gray-200">Details of the selected notification will appear here.</div>
                </CardContent>
            </Card>
        </>
    );
}

export default NotificationDetailsComponent;