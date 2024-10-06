import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function RestaurantCustomerFeedbackComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Customer Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b py-2">"Amazing food! Will order again." - John Doe</li>
                            <li className="border-b py-2">"Delivery was late." - Jane Smith</li>
                            <li className="border-b py-2">"Loved the pasta, highly recommended!" - Michael Lee</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default RestaurantCustomerFeedbackComponent;