import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function OrderHeaderComponent() {
    return (
        <>
            <Card className="p-6 my-5 mb-4">
                <CardHeader>
                    <CardTitle>Order Management</CardTitle>
                </CardHeader>
            </Card>
        </>
    );
}

export default OrderHeaderComponent;