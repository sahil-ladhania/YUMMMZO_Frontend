import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function MenuOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-10 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Menu Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-300 h-40 bg-neutral-700 rounded-lg">
                    {/* table for menu overview details */}
                </CardContent>
            </Card>
        </>
    );
}

export default MenuOverviewComponent;