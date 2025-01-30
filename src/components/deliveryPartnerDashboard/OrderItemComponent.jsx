import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { MdDeliveryDining } from "react-icons/md";
import { useSelector } from "react-redux";

function OrderItemComponent() {

    // useSelector
    const {activeOrderDetails} = useSelector((store) => store.deliveryManagement);
    const orderStatus = activeOrderDetails ? activeOrderDetails.orderStatus : null;
    const orderId = activeOrderDetails ? activeOrderDetails.orderId : null;

    // Handler Functions
    const handleUpdateToOrderOnTheWay = (e) => {
        const {value} = e.target;
        console.log(value);
        console.log(orderId);
    }

    return (
        <>
            <Card className="p-4 bg-neutral-800 rounded-lg flex justify-between items-center border-none mb-4 text-white">
                <div className="flex justify-between w-7/12">
                    <p className="font-semibold">Order ID: {activeOrderDetails.orderId}</p>
                    {
                        orderStatus === "OUT_FOR_DELIVERY" ?
                        <p className="text-neutral-400 w-9/12">Status : PENDING</p>
                        :
                        <p className="text-neutral-400 w-9/12">Status : {activeOrderDetails.orderStatus}</p>    
                    }
                </div>
                <Button onClick={handleUpdateToOrderOnTheWay} name="on-the-way" value="ON_THE_WAY" className="bg-white text-black hover:bg-white">
                    Accept Delivery
                    <MdDeliveryDining className="ml-1 size-10"/>
                </Button>
                <Button className="bg-sky-700 text-white hover:bg-sky-700">View Delivery Details</Button>
            </Card>
        </>
    );
}

export default OrderItemComponent;