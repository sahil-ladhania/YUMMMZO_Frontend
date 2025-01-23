import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";
import { Textarea } from "@/components/ui/textarea"; // Importing Textarea from ShadCN
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentMenu } from "@/redux/slices/menuCreationSlice";

function MenuItemComponent() {

    // useDispatch and useSelector
    const dispatch = useDispatch();

    // State Variables
    const [menuItemDetails , setMenuItemDetails] = useState({
        "itemName" : '',
        "itemPrice" : '',
        "quantity" : '',
        "itemDescription" : '',
        "isPureVeg" : false,
        "isBestSeller" : false,
        "itemImage" : '',
        "itemCategory" : ''
    });

    // Handler Functions
    const handleMenuItemFeilds = (e) => {
        e.preventDefault();
        const {name , type , value , checked} = e.target;
        const updatedMenuItemDetails = {
            ...menuItemDetails,
            [name] : type === "checkbox" ? checked : value
        }
        setMenuItemDetails(updatedMenuItemDetails);
        dispatch(setCurrentMenu(updatedMenuItemDetails));
    }

    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-700">
                {/* Left side: Item Name, Price, Quantity */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <Input onChange={handleMenuItemFeilds} className="w-40" name="itemName" value={menuItemDetails.itemName} placeholder="Item Name" />
                        <Input onChange={handleMenuItemFeilds} className="w-32" name="itemPrice" value={menuItemDetails.itemPrice} placeholder="Item Price" type="number" />
                        <Input onChange={handleMenuItemFeilds} className="w-24" name="itemQuantity" value={menuItemDetails.quantity} placeholder="Quantity" type="number" />
                    </div>
                    {/* Description Textarea */}
                    <Textarea 
                        onChange={handleMenuItemFeilds}
                        className="w-full" 
                        placeholder="Item Description" 
                        name="itemDescription" 
                        value={menuItemDetails.itemDescription}
                        rows={4}
                    />
                    <div className="flex items-center space-x-4 mt-4">
                        {/* Pure Veg Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                onChange={handleMenuItemFeilds}
                                type="checkbox"
                                id="isPureVeg"
                                name="isPureVeg" 
                                checked={menuItemDetails.isPureVeg}
                                className="form-checkbox text-green-600"
                            />
                            <label htmlFor="isPureVeg" className="text-sm text-white">
                                Is Pure Veg
                            </label>
                        </div>
                        {/* Best Seller Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                onChange={handleMenuItemFeilds}
                                type="checkbox"
                                id="isBestSeller"
                                name="isBestSeller" 
                                checked={menuItemDetails.isBestSeller}
                                className="form-checkbox text-orange-500"
                            />
                            <label htmlFor="isBestSeller" className="text-sm text-white">
                                Is Best Seller
                            </label>
                        </div>
                        {/* Menu Item Image Section */}
                        <div className="roboto-regular text-white">
                            <Input
                                onChange={handleMenuItemFeilds}
                                className="mt-2 text-red-800 font-medium"
                                id="picture" 
                                name="menuItemImageLink" 
                                type="file" 
                                accept="image/*" 
                                required
                            />
                        </div>
                    </div>
                </div>
                {/* Right side: Action Buttons */}
                <div className="flex items-center space-x-4">
                    <Button className="bg-black hover:bg-black text-white">Edit</Button>
                    <Button className="bg-red-900 hover:bg-red-800 text-white">Delete</Button>
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;