import { useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { StarIcon } from "lucide-react";

function OrderedItemsListComponent() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const orderedItems = [
        { id: 1, name: "Burger", quantity: 2, price: "₹199", image: "/images/burger.png" },
        { id: 2, name: "Fries", quantity: 1, price: "₹99", image: "/images/fries.png" },
    ];    

    return (
        <>
            <Card className="bg-neutral-800 text-white rounded-lg border-none mb-10">
                <CardHeader>
                    <CardTitle className="text-orange-400">Ordered Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px]">
                        {orderedItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between py-2 border-b border-neutral-800">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                                    <div>
                                        <p className="text-white">{item.name}</p>
                                        <p className="text-neutral-400">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-white">{item.price}</p>
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
                            <DialogTitle className="text-orange-400">Rate {selectedItem.name}</DialogTitle>
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
                                onChange={(e) => setReview(e.target.value)}
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
                                <Button className="bg-orange-400 text-black hover:bg-orange-500">
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