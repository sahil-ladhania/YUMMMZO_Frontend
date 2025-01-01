import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";

function ContactFormComponent() {
    return (
        <>
            <form className="space-y-4">
                <div className="text-white">
                    <label htmlFor="name" className="block text-sm text-white">Your Name</label>
                    <Input className="text-black" id="name" placeholder="Your Name" required/>
                </div>

                <div className="text-white">
                    <label htmlFor="email" className="block text-sm text-white">Your Email</label>
                    <Input className="text-black" id="email" type="email" placeholder="Your Email" required/>
                </div>

                <div className="text-white">
                    <label htmlFor="message" className="block text-sm text-white">Your Message</label>
                    <Textarea className="text-black" id="message" placeholder="Your Message" rows="4" required/>
                </div>
                <Button className="transition transform ease-in-out hover:scale-105 duration-300 bg-orange-400 text-black hover:bg-orange-400 hover:text-black" type="submit">
                    Send Message
                </Button>   
            </form>
        </>
    );
}

export default ContactFormComponent;