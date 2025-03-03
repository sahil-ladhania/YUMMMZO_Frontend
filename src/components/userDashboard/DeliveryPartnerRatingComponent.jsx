import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function DeliveryPartnerRatingComponent() {
    const [rating, setRating] = useState(0);

  return (
    <>
        <Card className="bg-neutral-800 text-white rounded-lg border-none">
            <CardHeader>
                <CardTitle className="text-orange-400">Rate Your Delivery Partner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 rounded-full overflow-hidden">
                        <AvatarImage 
                            src="https://github.com/shadcn.png" 
                            alt="Delivery Partner" 
                            className="w-full h-full rounded-full object-cover"
                        />
                        <AvatarFallback className="bg-orange-400 text-white rounded-full flex items-center justify-center w-14 h-14">
                            DP
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-white">John Doe</p>
                        <p className="text-neutral-400">Delivered in 30 mins</p>
                    </div>
                </div>
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
                <Textarea placeholder="Write your feedback (optional)" className="bg-neutral-800 text-white" />
                {/* Submit Button */}
                <Button className="bg-orange-400 text-black hover:bg-orange-500">Submit Rating</Button>
            </CardContent>
        </Card>
    </>
  )
}

export default DeliveryPartnerRatingComponent;