import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function OrderDetailsCardComponent() {

  // useDispatch and useSelector
  const dispatch = useDispatch();
    const { orderId , userAddress , orderDate , totalPrice } = useSelector((store) => store.orderSummary);
  
  return (
    <>
        <Card className="bg-neutral-800 text-white rounded-lg border-none mb-10">
            <CardHeader>
                <CardTitle className="text-orange-400">Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex justify-between text-neutral-300">
                  <span>Order ID:</span>
                  <span>{orderId}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Restaurant:</span>
                  <span>Yummy Bites</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Total Price:</span>
                  <span>Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Order Date:</span>
                  <span>{orderDate}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Delivery Address:</span>
                  <span>{userAddress}</span>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default OrderDetailsCardComponent;