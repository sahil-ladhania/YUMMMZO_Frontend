import TeamMemberComponent from "@/components/userDashboard/TeamMemberComponent.jsx";

function AboutUs() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Welcome to YUMMMZO! We are committed to providing the best online food delivery experience for our
                    customers. Our goal is to bring delicious meals from your favorite restaurants straight to your
                    doorstep.
                </p>
                <h2 className="text-xl font-semibold mb-2">Our Team</h2>
                <div className="flex flex-wrap gap-4">
                    <TeamMemberComponent name="John Doe" role="CEO"/>
                    <TeamMemberComponent name="Jane Smith" role="CTO"/>
                    <TeamMemberComponent name="Alice Johnson" role="CMO"/>
                    <TeamMemberComponent name="Bob Brown" role="COO"/>
                </div>
            </div>
        </>
    );
}

export default AboutUs;