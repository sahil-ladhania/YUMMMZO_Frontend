
function OrderTimelineComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow h-80">
                <h3 className="font-semibold mb-2">Order Timeline</h3>
                <ul className="space-y-2">
                    <li>Order Placed: 10:00 AM</li>
                    <li>Order Accepted: 10:10 AM</li>
                    <li>Preparing Order: 10:20 AM</li>
                    <li>Out for Delivery: 10:30 AM</li>
                    <li>Delivered: 10:45 AM</li>
                </ul>
            </div>
        </>
    );
}

export default OrderTimelineComponent;