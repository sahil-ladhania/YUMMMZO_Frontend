import {Button} from "@/components/ui/button.jsx";
import { useSelector } from "react-redux";

function PaymentOptionsComponent() {

    // useSelector
    const { toPay } = useSelector((store) => store.checkout);

    return (
        <>
            <div className="bg-neutral-100 p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2 text-xl roboto-regular">Payment Options</h3>
                {/* UPI Payment */}
                <div className="mb-4">
                    <div className="flex items-center py-4">
                        <h4 className="font-semibold text-md roboto-regular">Pay with UPI</h4>
                        <img className="h-8 ml-2" src="https://logowik.com/content/uploads/images/upi-unified-payments-interface4949.logowik.com.webp" alt="" />
                    </div>
                    <label className="flex items-center roboto-regular">
                        <input type="checkbox" className="mr-2"/>
                        existingupi@example.com
                    </label>
                    <div className="">
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Pay Rs. {toPay}
                        </Button>
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Add New UPI ID
                        </Button>
                    </div>
                </div>
                {/* Card Payment */}
                <div className="mb-4">
                    <div className="flex items-center py-4">
                        <h4 className="font-semibold roboto-regular">Pay with Card</h4>
                        <img className="h-4 ml-2" src="https://i.pinimg.com/736x/35/6b/95/356b9546f3f77798b6a76fbc1a1cebf6.jpg" alt="" />
                    </div>
                    <label className="flex items-center roboto-regular">
                        <input type="checkbox" className="mr-2"/>
                        1234 **** **** 5678
                    </label>
                    <div className="">
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Pay Rs. {toPay}
                        </Button>
                        <Button className="mt-2 roboto-regular w-full bg-black hover:bg-black">
                            Add New Card
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentOptionsComponent;