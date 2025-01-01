import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function NotificationsHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                        <p className="text-neutral-300 text-sm">Get all the notifications at one place.</p>
                </CardContent>
            </Card>
        </>
    );
}

export default NotificationsHeaderComponent;