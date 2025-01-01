import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function NotificationDetailsComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Notification Details</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for notification details */}
                    <div className="h-48 bg-neutral-800 rounded-lg">
                        
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default NotificationDetailsComponent;