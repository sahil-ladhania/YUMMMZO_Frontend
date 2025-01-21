import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import MenuItemComponent from "@/components/restaurantOwnerDashboard/MenuItemComponent.jsx";
import { Input } from "../ui/input";
import { IoIosAdd } from "react-icons/io";

function MenuCardComponent() {
    return (
        <>
            <Card className="p-6 bg-neutral-800 border-none rounded-md">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <Input className="w-4/12" placeholder="Enter the menu name"/>
                        <Button className="w-fit bg-white text-black hover:bg-white">
                            <IoIosAdd className="fill-black size-8"/>
                            Add New Item
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <MenuItemComponent />
                        <MenuItemComponent />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuCardComponent;