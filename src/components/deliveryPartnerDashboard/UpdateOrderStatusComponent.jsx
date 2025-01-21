import {Select} from "@/components/ui/select";
import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import { MdOutlineUpdate } from "react-icons/md";

function UpdateOrderStatusComponent() {
    const statuses = ["In Progress", "Delivered", "Cancelled"];
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 border-none bg-neutral-900">
                    <h2 className="text-orange-400 text-2xl font-medium mb-4">Update Order Status</h2>
                    <Select>
                        {
                            statuses.map((status, index) => (
                                <option className="text-white text-sm my-2" key={index} value={status}>
                                    {status}
                                </option>
                            ))
                        }
                    </Select>
                    <Button className="mt-4 bg-white text-black hover:bg-white">
                        <MdOutlineUpdate className="mr-2 size-6"/>
                        Update Status
                    </Button>
                </Card>
            </section>
        </>
    );
}

export default UpdateOrderStatusComponent;