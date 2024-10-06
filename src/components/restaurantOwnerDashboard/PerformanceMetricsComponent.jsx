import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function PerformanceMetricsComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for performance metrics */}
                    <div className="h-48 bg-gray-200">Performance Metrics Placeholder</div>
                </CardContent>
            </Card>
        </>
    );
}

export default PerformanceMetricsComponent;