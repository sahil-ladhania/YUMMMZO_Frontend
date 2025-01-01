import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FcSalesPerformance } from "react-icons/fc";

function PerformanceMetricsComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                        Performance Metrics
                        <FcSalesPerformance className="ml-2 fill-orange-400"/>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for performance metrics */}
                    <div className="h-48 bg-neutral-800 rounded-lg">

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default PerformanceMetricsComponent;