import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function UpdateOrderStatusComponent() {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-bold mb-2">Update Order Status</h3>
                <Select className="w-full mb-2">
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </Select>
                <Button>Update Status</Button>
            </div>
        </>
    );
}

export default UpdateOrderStatusComponent;