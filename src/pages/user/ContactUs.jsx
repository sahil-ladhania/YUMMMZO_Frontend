import ContactFormComponent from "@/components/userDashboard/ContactFormComponent.jsx";

function ContactUs() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <p className="mb-4">
                    We would love to hear from you! Please fill out the form below, and we will get back to you as soon
                    as possible.
                </p>
                <ContactFormComponent/>
            </div>
        </>
    );
}

export default ContactUs;