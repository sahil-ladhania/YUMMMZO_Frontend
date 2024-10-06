import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button.jsx";
import MenuItemComponent from "@/components/restaurantOwnerDashboard/MenuItemComponent.jsx";

function MenuManagementComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Manage Your Menu</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for MenuItem components */}
                    <div className="space-y-4">
                        <MenuItemComponent />
                        <MenuItemComponent />
                        <MenuItemComponent />
                    </div>
                    <Button className="mt-4 w-full">Add Items</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuManagementComponent;