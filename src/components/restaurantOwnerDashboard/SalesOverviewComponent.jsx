import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function SalesOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for sales overview chart */}
                    <div className="h-48 bg-gray-200">Sales Chart Placeholder</div>
                </CardContent>
            </Card>
        </>
    );
}

export default SalesOverviewComponent;