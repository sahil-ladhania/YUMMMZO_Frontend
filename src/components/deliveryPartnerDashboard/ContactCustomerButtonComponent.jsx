import {Button} from "@/components/ui/button.jsx";
import { MdContactPhone } from "react-icons/md";

function ContactCustomerButtonComponent() {
    return (
        <>
            <section className="p-6">
                <Button  className="mb-6 bg-white text-black hover:bg-white">
                    <MdContactPhone className="mr-2 size-6"/>
                    Contact Customer
                </Button>
            </section>
        </>
    );
}

export default ContactCustomerButtonComponent;