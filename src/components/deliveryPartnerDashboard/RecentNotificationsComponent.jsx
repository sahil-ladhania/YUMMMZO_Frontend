import {Card} from "@/components/ui/card.jsx";
import NotificationComponent from "@/components/deliveryPartnerDashboard/NotificationComponent.jsx";

function RecentNotificationsComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="p-6 mb-6 bg-neutral-900 border-none">
                    <h1 className="text-orange-400 text-2xl font-medium mb-6">Recent Notifications</h1>
                    <div className="space-y-3">
                        <NotificationComponent message="New order available!" />
                        <NotificationComponent message="Your delivery was successful." />
                        <NotificationComponent message="You have a new message from the admin." />
                    </div>
                </Card>
            </section>
        </>
    );
}

export default RecentNotificationsComponent;