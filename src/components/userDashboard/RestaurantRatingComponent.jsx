import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { ratingRestaurant } from "@/services/orderSummaryAndRatings/ratings";
import { useSelector } from "react-redux";

function RestaurantRatingComponent() {

    // useDispatch and useSelector
    const { userId , orderId , restaurantId } = useSelector((store) => store.orderSummary);

    // State Variables
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    // Handler Functions
    const handleChange = (e) => {
        e.preventDefault();
        setReview(e.target.value);
    };
    const rateRestaurant = async(e) => {
        e.preventDefault();
        const ratingType = e.target.name;
        const formData = {
            ratingType,
            rating,
            review
        }
        try{
            const restaurantRating = await ratingRestaurant({userId , orderId , restaurantId , formData});
            setRating(0);
            setReview("");
        }
        catch(error){
            console.error("Error Submitting Restaurant Rating : ", error);
        }
    };

  return (
    <>
        <Card className="bg-neutral-800 text-white rounded-lg border-none">
            <CardHeader>
                <CardTitle className="text-orange-400">Rate the Restaurant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                    key={star}
                    className={`w-8 h-8 cursor-pointer ${
                        rating >= star ? "text-orange-400" : "text-neutral-600"
                    }`}
                    onClick={() => setRating(star)}
                    />
                ))}
                </div>
                {/* Review Box */}
                <Textarea onChange={handleChange} value={review} placeholder="Write your review (optional)" className="bg-neutral-800 text-white" />
                {/* Submit Button */}
                <Button onClick={rateRestaurant} name="RESTAURANT" className="bg-orange-400 text-black hover:bg-orange-500">Submit Rating</Button>
            </CardContent>
        </Card>
    </>
  )
}

export default  RestaurantRatingComponent;