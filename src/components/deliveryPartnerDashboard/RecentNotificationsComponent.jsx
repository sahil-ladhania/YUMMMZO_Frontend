import {Card} from "@/components/ui/card.jsx";
import NotificationComponent from "@/components/deliveryPartnerDashboard/NotificationComponent.jsx";

function RecentNotificationsComponent() {
    return (
        <>
            <Card className="p-4">
                <h1 className="text-xl font-semibold">Recent Notifications</h1>
                <div className="space-y-2">
                    <NotificationComponent message="New order available!" />
                    <NotificationComponent message="Your delivery was successful." />
                    <NotificationComponent message="You have a new message from the admin." />
                </div>
            </Card>
        </>
    );
}

export default RecentNotificationsComponent;