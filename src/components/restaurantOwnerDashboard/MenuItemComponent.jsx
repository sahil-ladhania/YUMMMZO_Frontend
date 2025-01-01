import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button.jsx";

function MenuItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-800">
                <Input className="mx-2" placeholder="Item Name"/>
                <Input className="mx-2" placeholder="Item Price" type="number"/>
                <Input className="mx-2" placeholder="Item Quantity" type="number"/>
                <Button className="mx-2 bg-black hover:bg-black">Edit</Button>
                <Button className="bg-red-900 hover:bg-red-900">Delete</Button>
            </div>
        </>
    );
}

export default MenuItemComponent;