import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button.jsx";

function MenuItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between border p-4 rounded-md">
                <span>Item No: </span>
                <Input className="mx-2" placeholder="Item Name"/>
                <Input className="mx-2" placeholder="Item Price" type="number"/>
                <Input className="mx-2" placeholder="Item Quantity" type="number"/>
                <Button className="mx-2">Edit</Button>
                <Button className="bg-red-500">Delete</Button>
            </div>
        </>
    );
}

export default MenuItemComponent;