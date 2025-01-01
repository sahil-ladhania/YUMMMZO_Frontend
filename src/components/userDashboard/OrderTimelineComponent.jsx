
function OrderTimelineComponent() {
    return (
        <>
            <div className="bg-neutral-800 p-4 rounded-lg shadow h-80">
                <h3 className="font-semibold mb-2 roboto-regular text-orange-400 mb-4">Order Timeline</h3>
                <ul className="space-y-2">
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Order Placed : 10:00 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Order Accepted: 10:10 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Preparing Order: 10:20 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Out for Delivery: 10:30 AM</li>
                    <li className="roboto-regular text-neutral-300 text-sm py-1">Delivered: 10:45 AM</li>
                </ul>
            </div>
        </>
    );
}

export default OrderTimelineComponent;