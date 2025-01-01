import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function UpdateOrderStatusComponent() {
    return (
        <>
            <div className="my-10">
                <div className="bg-neutral-900 border-none py-4 px-2 rounded-lg mb-10">
                    <h3 className="font-medium mb-2 text-orange-400 text-lg">Update Order Status</h3>
                    <Select className="w-full mb-2">
                        <option className="text-neutral-300 text-sm">Pending</option>
                        <option className="text-neutral-300 text-sm">In Progress</option>
                        <option className="text-neutral-300 text-sm">Completed</option>
                        <option className="text-neutral-300 text-sm">Cancelled</option>
                    </Select>
                </div>
                <Button className="bg-white text-black hover:bg-white">Update Status</Button>
            </div>
        </>
    );
}

export default UpdateOrderStatusComponent;