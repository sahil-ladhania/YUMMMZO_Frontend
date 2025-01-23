import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import MenuItemComponent from "@/components/restaurantOwnerDashboard/MenuItemComponent.jsx";
import { Input } from "../ui/input";
import { IoIosAdd } from "react-icons/io";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentMenu } from "@/redux/slices/menuCreationSlice";

function MenuCardComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();

    // State Variables
    const [menuDetails , setMenuDetails] = useState({
        "menuName" : '',
        "menuDescription" : '',
        "isActive" : false
    });
    const [menuItems , setMenuItems] = useState([]);

    // Handler Functions
    const handleMenuFeilds = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        const updatedMenuDetails = {
            ...menuDetails,
            [name] : type === "checkbox" ? checked : value,
        };
        setMenuDetails(updatedMenuDetails);
        dispatch(setCurrentMenu(updatedMenuDetails));
    };

    return (
        <>
            <Card className="p-6 bg-neutral-800 border-none rounded-md">
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col w-8/12 h-44 justify-between">
                            <Input onChange={handleMenuFeilds} className="w-auto" type="text" name="menuName" value={menuDetails.menuName} placeholder="Enter the menu name"/>
                            <Textarea onChange={handleMenuFeilds} className="" type="text" name="menuDescription" value={menuDetails.menuDescription} placeholder="Enter the menu description"/>
                            <div className="flex items-center space-x-2">
                                <input
                                    onChange={handleMenuFeilds}
                                    type="checkbox"
                                    id="isActive"
                                    name="isActive" 
                                    checked={menuDetails.isActive}
                                    className="form-checkbox text-orange-500"
                                />
                                <label htmlFor="isActive" className="text-sm text-white">
                                    Is Active
                                </label>
                        </div>
                        </div>
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
                <Button className="mt-6 w-full bg-white text-black hover:bg-white">Save Menu</Button>
            </Card>
        </>
    );
}

export default MenuCardComponent;