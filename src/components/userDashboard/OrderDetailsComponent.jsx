import {Button} from "@/components/ui/button.jsx";

function OrderDetailsComponent() {
    return (
        <>
            <div className="bg-order-details-gradient p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-4 roboto-regular text-black">Order Summary</h4>
                {/* Restaurant Info */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/e6c52804-eab5-48c8-a29e-c717ddfc39b2_948065.jpg"
                        alt="Restaurant"
                        className="rounded-md mr-4 h-20 w-20"
                    />
                    <span className="font-medium roboto-regular text-lg text-black">Goila Butter Chicken</span>
                </div>
                {/* Items List */}
                <div className="mb-4">
                    <h5 className="font-medium roboto-regular text-md text-black">Items</h5>
                    <div className="flex justify-between items-center py-2">
                        <span className="roboto-regular text-sm font-medium text-black">Item 1</span>
                        <div className="flex items-center">
                            <Button className="h-10 w-16 roboto-regular">-</Button>
                            <span className="mx-2 roboto-regular text-sm">1</span>
                            <Button className="h-10 w-16 roboto-regular">+</Button>
                            <span className="ml-2 roboto-regular text-sm font-medium">$10.00</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="roboto-regular text-sm font-medium text-black">Item 2</span>
                        <div className="flex items-center">
                            <Button className="h-10 w-16 roboto-regular">-</Button>
                            <span className="mx-2 roboto-regular text-sm">1</span>
                            <Button className="h-10 w-16 roboto-regular">+</Button>
                            <span className="ml-2 roboto-regular text-sm font-medium">$10.00</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="roboto-regular text-sm font-medium text-black">Item 3</span>
                        <div className="flex items-center">
                            <Button className="h-10 w-16 roboto-regular">-</Button>
                            <span className="mx-2 roboto-regular text-sm">1</span>
                            <Button className="h-10 w-16 roboto-regular">+</Button>
                            <span className="ml-2 roboto-regular text-sm font-medium">$10.00</span>
                        </div>
                    </div>
                </div>
                {/* Bill Details */}
                <div className="border-t border-black mt-4 pt-4">
                    <div className="flex justify-between py-1">
                        <span className="roboto-regular text-sm font-bold">Item Total</span>
                        <span className="roboto-regular text-sm font-bold">$10.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="roboto-regular text-sm font-bold">Delivery Fee</span>
                        <span className="roboto-regular text-sm font-bold">$2.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="roboto-regular text-sm font-bold">Platform Fee</span>
                        <span className="roboto-regular text-sm font-bold">$1.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="roboto-regular text-sm font-bold">GST</span>
                        <span className="roboto-regular text-sm font-bold">$1.20</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-4">
                        <span className="roboto-regular text-md font-bold">To Pay</span>
                        <span className="roboto-regular text-md font-bold">$14.20</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailsComponent;