import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function MenuHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4">
                <CardHeader>
                    <CardTitle className="text-xl">Manage Menu</CardTitle>
                </CardHeader>
            </Card>
        </>
    );
}

export default MenuHeaderComponent;