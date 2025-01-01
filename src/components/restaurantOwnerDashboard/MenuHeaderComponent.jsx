import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MenuHeaderComponent() {
    return (
        <>
            <Card className="p-6 mt-10 mb-10 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Manage Menu</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-neutral-300 text-sm">You can manipulate your menu list.</p>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuHeaderComponent;