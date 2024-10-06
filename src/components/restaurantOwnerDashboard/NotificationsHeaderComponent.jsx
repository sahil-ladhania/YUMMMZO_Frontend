import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function NotificationsHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4">
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                </CardHeader>
            </Card>
        </>
    );
}

export default NotificationsHeaderComponent;