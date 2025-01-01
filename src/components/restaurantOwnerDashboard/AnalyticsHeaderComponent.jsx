import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function AnalyticsHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Analytics Dashboard</CardTitle>
                </CardHeader>
            </Card>
        </>
    );
}

export default AnalyticsHeaderComponent;