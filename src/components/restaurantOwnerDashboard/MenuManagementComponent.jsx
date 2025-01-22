import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button.jsx";
import MenuCardComponent from "./MenuCardComponent";
import { IoIosAdd } from "react-icons/io";

function MenuManagementComponent() {
    return (
        <>
            <Card className="p-6 mb-10 bg-neutral-900 border-none">
                <CardHeader>
                    <div className="flex justify-between items-center cursor-pointer">
                        <CardTitle className="text-orange-400 text-2xl font-medium">Manage Your Menus</CardTitle>
                        <Button className="mt-6 w-fit bg-white text-black hover:bg-white">
                            <IoIosAdd className="fill-black size-8"/>
                            Add New Menu
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 mb-10">
                        <MenuCardComponent />
                    </div>
                    <div className="space-y-6 mb-10">
                        <MenuCardComponent />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuManagementComponent;