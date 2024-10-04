import ReviewItemComponent from "@/components/userDashboard/ReviewItemComponent.jsx";

function ReviewsListComponent() {
    return (
        <>
            <div className="w-full max-w-5xl mx-auto py-8"> {/* Wider container */}
                <h2 className="text-xl font-semibold mb-4">All Reviews</h2>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                {/* Hardcode as many as you want */}
            </div>
        </>
    );
}

export default ReviewsListComponent;