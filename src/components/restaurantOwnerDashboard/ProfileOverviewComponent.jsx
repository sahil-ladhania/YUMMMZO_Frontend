import { Card, CardContent } from "@/components/ui/card";

function ProfileOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardContent>
                    <h3 className="font-semibold">Profile Overview</h3>
                    <div className="mt-2">
                        <p><strong>Name:</strong> Restaurant Name</p>
                        <p><strong>Email:</strong> restaurant@example.com</p>
                        <p><strong>Phone:</strong> +1 234 567 890</p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default ProfileOverviewComponent;