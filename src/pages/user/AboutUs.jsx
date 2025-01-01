import TeamMemberComponent from "@/components/userDashboard/TeamMemberComponent.jsx";

function AboutUs() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-white my-10 bg-neutral-900 rounded-lg">
                <h1 className="text-4xl font-semibold mb-4 py-2 roboto-regular text-orange-400">About Us</h1>
                <p className="roboto-regular text-sm text-neutral-300">
                    Welcome to YUMMMZO! We are committed to providing the best online food delivery experience for our
                    customers. 
                </p>
                <p className="mb-6 roboto-regular text-sm text-neutral-300">
                    Our goal is to bring delicious meals from your favorite restaurants straight to your
                doorstep.
                </p>
                <h2 className="text-xl font-medium mb-4 mt-10 roboto-regular text-neutral-300">Our Team</h2>
                <div className="flex flex-wrap gap-4">
                    <TeamMemberComponent name="Sahil Ladhania" role="Founder"/>
                    <TeamMemberComponent name="Janvi Sunderka" role="Co-Founder"/>
                </div>
            </div>
        </>
    );
}

export default AboutUs;