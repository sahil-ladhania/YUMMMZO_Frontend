import { useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { StarIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { ratingOrderedItem } from "@/services/orderSummaryAndRatings/ratings";

function OrderedItemsListComponent() {
    
    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { orderItems , userId , orderId } = useSelector((store) => store.orderSummary);

    // State Variables
    const [selectedItem, setSelectedItem] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    // Handler Functions
    const handleChange = (e) => {
        e.preventDefault();
        setReview(e.target.value);
    };
    const rateOrderedItem = async(e , orderedItemId) => {
        e.preventDefault();
        const ratingType = e.target.name;
        const formData = {
            ratingType,
            rating,
            review
        }
        try{
            const orderedItemRating = await ratingOrderedItem({userId , orderId , orderedItemId , formData});
            setRating(0);
            setReview("");
            setSelectedItem(null);
        }
        catch(error){
            console.error("Error Submitting Ordered Item Rating : ", error);
        }
    };
    

    return (
        <>
            <Card className="bg-neutral-800 text-white rounded-lg border-none mb-10">
                <CardHeader>
                    <CardTitle className="text-orange-400">Ordered Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px]">
                        {orderItems.map((item) => (
                            <div key={item.orderItemId} className="flex items-center justify-between py-2 border-b border-neutral-800">
                                <div className="flex items-center gap-4">
                                    <p className="text-white">Item Id : {item.menuItemId}</p>
                                    <div>
                                        <p className="text-white">{item.name}</p>
                                        <p className="text-neutral-400">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-white">Rs. {item.totalPrice}</p>
                                    <Button 
                                        className="bg-orange-400 text-black hover:bg-orange-500"
                                        onClick={() => setSelectedItem(item)} // Open Modal with Item
                                    >
                                        Rate
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
            </Card>
            {/* Modal - Renders Only When Item is Selected */}
            {selectedItem && (
                <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
                    <DialogContent className="bg-neutral-800 text-white rounded-lg max-w-md border-none">
                        <DialogHeader>
                            <DialogTitle className="text-orange-400">Rating Ordered Item Id : {selectedItem.orderItemId}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            {/* Star Rating */}
                            <div className="flex justify-center space-x-2">
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
                            {/* Review Textarea */}
                            <Textarea 
                                placeholder="Write your review (optional)" 
                                className="bg-neutral-800 text-white"
                                value={review}
                                onChange={handleChange}
                            />
                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <Button 
                                    variant="outline" 
                                    className="text-black hover:bg-white"
                                    onClick={() => setSelectedItem(null)} // Close Modal
                                >
                                    Cancel
                                </Button>
                                <Button onClick={(e) => rateOrderedItem(e , selectedItem.orderItemId)} name="MENUITEM" className="bg-orange-400 text-black hover:bg-orange-500">
                                    Submit Rating
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}

export default OrderedItemsListComponent;