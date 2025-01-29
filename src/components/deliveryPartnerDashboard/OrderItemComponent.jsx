import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { MdDeliveryDining } from "react-icons/md";

function OrderItemComponent({ orderId, orderStatus }) {
    return (
        <>
            <Card className="p-4 bg-neutral-800 rounded-lg flex justify-between items-center border-none mb-4 text-white">
                <div className="flex justify-between w-4/12">
                    <p className="font-semibold">Order ID: {orderId}</p>
                    <p className="text-neutral-400 w-6/12">Status : {orderStatus}</p>
                </div>
                <Button className="bg-white text-black hover:bg-white">
                    Accept Delivery
                    <MdDeliveryDining className="ml-1 size-10"/>
                </Button>
                <Button className="bg-sky-700 text-white hover:bg-sky-700">View Delivery Details</Button>
            </Card>
        </>
    );
}

export default OrderItemComponent;