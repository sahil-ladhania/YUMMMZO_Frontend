import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button.jsx";
import MenuItemComponent from "@/components/restaurantOwnerDashboard/MenuItemComponent.jsx";

function MenuManagementComponent() {
    return (
        <>
            <Card className="p-6 mb-10 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Manage Your Menu</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for MenuItem components */}
                    <div className="space-y-4">
                        <MenuItemComponent />
                        <MenuItemComponent />
                        <MenuItemComponent />
                    </div>
                    <Button className="mt-4 w-full bg-white text-black hover:bg-white">Add Items</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuManagementComponent;