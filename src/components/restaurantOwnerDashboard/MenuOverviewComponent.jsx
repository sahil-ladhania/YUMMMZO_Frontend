import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function MenuOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Menu Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for menu overview details */}
                    <p>Your current menu items will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuOverviewComponent;