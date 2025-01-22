import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";
import { Textarea } from "@/components/ui/textarea"; // Importing Textarea from ShadCN
import { Label } from "recharts";

function MenuItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-700">
                {/* Left side: Item Name, Price, Quantity */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <Input className="w-40" placeholder="Item Name" />
                        <Input className="w-32" placeholder="Item Price" type="number" />
                        <Input className="w-24" placeholder="Quantity" type="number" />
                    </div>
                    
                    {/* Description Textarea */}
                    <Textarea 
                        className="w-full" 
                        placeholder="Item Description" 
                        rows={4} // You can adjust the rows to control the height
                    />

                    <div className="flex items-center space-x-4 mt-4">
                        {/* Pure Veg Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="isPureVeg"
                                className="form-checkbox text-green-600"
                            />
                            <label htmlFor="isPureVeg" className="text-sm text-white">
                                Is Pure Veg
                            </label>
                        </div>

                        {/* Best Seller Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="isBestSeller"
                                className="form-checkbox text-orange-500"
                            />
                            <label htmlFor="isBestSeller" className="text-sm text-white">
                                Is Best Seller
                            </label>
                        </div>
                        {/* Menu Item Image Section */}
                        <div className="roboto-regular text-white">
                            <Input
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