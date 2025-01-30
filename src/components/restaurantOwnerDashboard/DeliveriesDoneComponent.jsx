import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";

function DeliveriesDoneComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const {deliveriesDoneList} = useSelector((store) => store.deliveryManagement);

  const deliveries = [
    { id: 1, orderId: 101, customer: "John Doe", address: "123 Street, NY", status: "Delivered", time: "2:30 PM" },
    { id: 2, orderId: 102, customer: "Alice Smith", address: "456 Avenue, LA", status: "Pending", time: "3:15 PM" },
  ];

  return (
    <section className="p-6">
      <Card className="mb-6 p-6 bg-neutral-900 border-none shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-orange-400 text-2xl font-medium">Delivery Done List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full text-white">
              <TableHeader>
                <TableRow className="border-b border-gray-700 hover:bg-neutral-900">
                  <TableHead className="text-left">Order ID</TableHead>
                  <TableHead className="text-left">User ID</TableHead>
                  <TableHead className="text-left">Restaurant ID</TableHead>
                  <TableHead className="text-left">Restaurant Address</TableHead>
                  <TableHead className="text-left">User Address</TableHead>
                  <TableHead className="text-left">Total Amount</TableHead>
                  <TableHead className="text-left">Order Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* map the deliveries */}
                {
                    deliveriesDoneList.map((deliveryDone) => {
                        return(
                            <TableRow key={deliveryDone.orderId} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                                <TableCell>{deliveryDone.orderId}</TableCell>
                                <TableCell>{deliveryDone.userId}</TableCell>
                                <TableCell>{deliveryDone.restaurantId}</TableCell>
                                <TableCell>{deliveryDone.restaurantAddress}</TableCell>
                                <TableCell>{deliveryDone.userAddress}</TableCell>
                                <TableCell>Rs. {deliveryDone.totalPrice}</TableCell>
                                <TableCell>{deliveryDone.orderStatus}</TableCell>
                            </TableRow>
                        )
                    })
                }
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default DeliveriesDoneComponent;