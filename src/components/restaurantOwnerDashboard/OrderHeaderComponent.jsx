import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function OrderHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Order Management</CardTitle>
                </CardHeader>
                <CardContent>
                        <p className="text-neutral-300 text-sm">Manage your orders with one click.</p>
                </CardContent>
            </Card>
        </>
    );
}

export default OrderHeaderComponent;