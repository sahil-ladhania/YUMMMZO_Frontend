import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdFeedback } from "react-icons/md";

function RestaurantCustomerFeedbackComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Recent Customer Feedback
                            <MdFeedback className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">"Amazing food! Will order again." - John Doe</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">"Delivery was late." - Jane Smith</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">"Loved the pasta, highly recommended!" - Michael Lee</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantCustomerFeedbackComponent;