import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function OrderDetailsCardComponent() {
  return (
    <>
        <Card className="bg-neutral-800 text-white rounded-lg border-none mb-10">
            <CardHeader>
                <CardTitle className="text-orange-400">Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex justify-between text-neutral-300">
                <span>Order ID:</span>
                <span>#123456</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                <span>Restaurant:</span>
                <span>Yummy Bites</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                <span>Order Date:</span>
                <span>March 3, 2025</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                <span>Delivery Address:</span>
                <span>123, Street Name, City</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                <span>Payment Method:</span>
                <span>UPI</span>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default OrderDetailsCardComponent;