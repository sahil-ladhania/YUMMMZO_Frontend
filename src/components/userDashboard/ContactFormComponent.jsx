import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";

function ContactFormComponent() {
    return (
        <>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <Input id="name" placeholder="Your Name" required/>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <Input id="email" type="email" placeholder="Your Email" required/>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <Textarea id="message" placeholder="Your Message" rows="4" required/>
                </div>

                <Button type="submit">Send Message</Button>
            </form>
        </>
    );
}

export default ContactFormComponent;