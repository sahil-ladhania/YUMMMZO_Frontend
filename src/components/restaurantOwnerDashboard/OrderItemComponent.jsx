import {Button} from "@/components/ui/button.jsx";

function OrderItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-900 border-none">
                <div className="flex justify-between w-2/3">
                    <p className="text-neutral-300 text-sm font-medium">Order ID : 12345</p>
                    <p className="text-neutral-300 text-sm font-medium">Status : Pending</p>
                    <p className="text-neutral-300 text-sm font-medium">Amount : $50.00</p>
                </div>
                <Button className="mx-2 bg-white text-black hover:bg-white">View Details</Button>
            </div>
        </>
    );
}

export default OrderItemComponent;