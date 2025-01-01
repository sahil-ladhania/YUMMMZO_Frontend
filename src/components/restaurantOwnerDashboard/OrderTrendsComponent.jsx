import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaChartLine } from "react-icons/fa";

function OrderTrendsComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                        Order Trends
                        <FaChartLine className="ml-2"/>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for order trends chart */}
                    <div className="h-48 bg-neutral-800 rounded-lg">

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default OrderTrendsComponent;