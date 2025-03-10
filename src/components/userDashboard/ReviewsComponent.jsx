import ReviewsListComponent from "@/components/userDashboard/ReviewsListComponent.jsx";
import { MdReviews } from "react-icons/md";

function ReviewsComponent() {
    return (
        <>
            <div>
                <div className="flex items-center w-3/12">
                    <h1 className="text-orange-400 text-2xl">Burger King Reviews</h1>
                    <MdReviews className="fill-orange-500 size-6 ml-4"/>
                </div>
                <ReviewsListComponent/>
            </div>
        </>
    );
}

export default ReviewsComponent;