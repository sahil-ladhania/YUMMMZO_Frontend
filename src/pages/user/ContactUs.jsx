import ContactFormComponent from "@/components/userDashboard/ContactFormComponent.jsx";

function ContactUs() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-2xl w-full mx-auto px-6 py-10 rounded-lg border border-orange-400 bg-white bg-opacity-0 backdrop-blur-lg">
                    <h1 className="text-4xl font-bold mb-4 text-white text-center">Contact Us</h1>
                    <p className="mb-6 text-white text-center">
                        We would love to hear from you! Please fill out the form below, and we will get back to you as
                        soon as possible.
                    </p>
                    <ContactFormComponent />
                </div>
            </div>
        </>
    );
}

export default ContactUs;