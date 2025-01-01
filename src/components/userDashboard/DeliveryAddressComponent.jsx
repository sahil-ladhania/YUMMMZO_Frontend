import {Button} from "@/components/ui/button.jsx";
import { BiSolidDownArrow } from "react-icons/bi";

function DeliveryAddressComponent() {
    return (
        <>
            <div className="bg-neutral-700 roboto-regular p-4 rounded-lg shadow">
                <div className="flex flex-col mt-2">
                    <Button className="mb-2 roboto-regular bg-white text-black hover:bg-white">
                        Choose Existing Address
                        <BiSolidDownArrow className="size-3 ml-2"/>
                    </Button>
                    <Button className="roboto-regular bg-black hover:bg-black">
                        Add New Address
                    </Button>
                </div>
            </div>
        </>
    );
}

export default DeliveryAddressComponent;