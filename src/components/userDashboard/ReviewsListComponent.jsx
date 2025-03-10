import ReviewItemComponent from "@/components/userDashboard/ReviewItemComponent.jsx";

function ReviewsListComponent() {
    return (
        <>
            <div className="w-full py-8">
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
            </div>
        </>
    );
}

export default ReviewsListComponent;