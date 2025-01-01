import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RestaurantProfileHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Restaurant Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-neutral-300 text-sm">Edit your restaurant details.</p>
                </CardContent>
            </Card>
        </>
    );
}

export default RestaurantProfileHeaderComponent;