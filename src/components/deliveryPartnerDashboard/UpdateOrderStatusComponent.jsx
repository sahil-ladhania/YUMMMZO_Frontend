import {Select} from "@/components/ui/select";
import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";

function UpdateOrderStatusComponent() {
    const statuses = ["In Progress", "Delivered", "Cancelled"];
    return (
        <>
            <Card className="mb-6 p-4">
                <h2 className="text-xl font-semibold">Update Order Status</h2>
                <Select>
                    {statuses.map((status, index) => (
                        <option key={index} value={status}>
                            {status}
                        </option>
                    ))}
                </Select>
                <Button className="mt-4">Update Status</Button>
            </Card>
        </>
    );
}

export default UpdateOrderStatusComponent;