import { Card, CardContent } from "@/components/ui/card";

function ProfileOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardContent>
                    <h3 className="font-medium text-xl text-orange-400 py-4 ">Profile Overview</h3>
                    <div className="mt-4">
                        <p className="text-sm text-neutral-300 font-medium py-2"><strong>Name :</strong> Restaurant Name</p>
                        <p className="text-sm text-neutral-300 font-medium py-2"><strong>Email:</strong> restaurant@example.com</p>
                        <p className="text-sm text-neutral-300 font-medium py-2"><strong>Phone:</strong> +1 234 567 890</p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default ProfileOverviewComponent;