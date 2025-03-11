import ReviewItemComponent from "@/components/userDashboard/ReviewItemComponent.jsx";
import { useSelector } from "react-redux";

function ReviewsListComponent() {

    // useSelector
    const {reviews} = useSelector((store) => store.reviews);

    return (
        <>
            <div className="w-full py-8">
                {
                    (reviews.length > 0)
                    &&
                    reviews.map((review) => (
                        <ReviewItemComponent 
                            key={review.ratingId}
                            reviewId={review.ratingId}
                            firstName={review?.user?.firstName}
                            lastName={review?.user?.lastName}
                            rating={review.rating}
                            review={review.review}
                            reviewedTime={review.createdAt}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ReviewsListComponent;