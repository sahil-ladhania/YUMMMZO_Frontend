import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

function AddMenuItemComponent() {
    return (
        <>
            <Card className="p-6 mb-4">
                <CardHeader>
                    <CardTitle>Add Menu Item</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Menu Item Name" className="mb-2" />
                    <Input placeholder="Price" type="number" className="mb-2" />
                    <Button className="mt-4">Add Item</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default AddMenuItemComponent;