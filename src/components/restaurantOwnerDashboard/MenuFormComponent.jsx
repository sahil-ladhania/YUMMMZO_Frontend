import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";
import { Textarea } from "@/components/ui/textarea";

function MenuFormComponent() {
    return (
        <>
            <div className="p-6 bg-neutral-800 rounded-md space-y-4">
                <Input placeholder="Menu Name" className="w-full" />
                <Textarea placeholder="Menu Description" className="w-full" />
                <div className="flex justify-end space-x-4">
                    <Button className="bg-red-800 hover:bg-red-700 text-white">Cancel</Button>
                    <Button className="bg-green-700 hover:bg-green-600 text-white">Save</Button>
                </div>
            </div>
        </>
    );
}

export default MenuFormComponent;