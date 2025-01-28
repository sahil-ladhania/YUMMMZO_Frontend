import { useSelector } from "react-redux";

function OrderTimelineComponent() {

    // useSelector
    const { orderPlacedTime } = useSelector((store) => store.order);

    // Retrieving the Time
    const getPlaceOrderTime = (orderPlacedTime) => {
        if(orderPlacedTime){
            const date = new Date(orderPlacedTime);
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            const  time = new Intl.DateTimeFormat('en-US', options).format(date);
            return time;
        }
        else{
            return;
        }
    }
    const orderTime = getPlaceOrderTime(orderPlacedTime);


    return (
        <>
            <div className="bg-neutral-800 p-4 rounded-lg shadow h-80">
                <h3 className="font-semibold mb-2 roboto-regular text-orange-400">Order Timeline</h3>
                <ul className="space-y-2">
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Order Placed : {orderTime}</li>
                    {/* <li className="roboto-regular text-neutral-300 text-sm py-1">Order Accepted: 10:10 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Preparing Order: 10:20 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Out for Delivery: 10:30 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Delivered: 10:45 AM</li> */}
                </ul>
            </div>
        </>
    );
}

export default OrderTimelineComponent;