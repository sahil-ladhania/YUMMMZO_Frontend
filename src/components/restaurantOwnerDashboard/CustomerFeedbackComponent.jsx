import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdFeedback } from "react-icons/md";

function CustomerFeedbackComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                        Customer Feedback
                        <MdFeedback className="ml-2"/>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for customer feedback section */}
                    <div className="h-48 bg-neutral-800 rounded-lg">

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default CustomerFeedbackComponent;