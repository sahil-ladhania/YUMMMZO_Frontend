import { Button } from "@/components/ui/button.jsx";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
} from "@/components/ui/table";

function OrderItemComponent() {
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-900 border-none">
                <div className="flex justify-between w-6/12">
                    <p className="text-neutral-300 text-sm font-medium">Order ID : 12345</p>
                    <p className="text-neutral-300 text-sm font-medium">Status : Pending</p>
                    <p className="text-neutral-300 text-sm font-medium">Amount : $50.00</p>
                </div>
                <Button className="mx-2 bg-white text-black hover:bg-white">Accept Order</Button>
                <Button className="mx-2 bg-white text-black hover:bg-white">Reject Order</Button>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="mx-2 bg-blue-600 text-white hover:bg-blue-700">View Order Details</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Order Details</AlertDialogTitle>
                            <AlertDialogDescription>
                                Here are the details for the selected order:
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="space-y-4">
                            {/* Order Summary with ShadCN Table */}
                            <div>
                                <h3 className="text-md font-semibold my-2">Order Summary</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-sm font-semibold">Field</TableHead>
                                            <TableHead className="text-sm font-semibold">Details</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Order ID</TableCell>
                                            <TableCell className="text-sm">24</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Status</TableCell>
                                            <TableCell className="text-sm">PENDING</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Total Price</TableCell>
                                            <TableCell className="text-sm">₹441</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">User Address</TableCell>
                                            <TableCell className="text-sm">13-B, Boring road, Patna</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Restaurant Address</TableCell>
                                            <TableCell className="text-sm">Kankarbagh, Patna</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Created At</TableCell>
                                            <TableCell className="text-sm">2025-01-28T13:45:14.641Z</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            {/* Order Items */}
                            <div>
                                <h3 className="text-md font-semibold">Order Items</h3>
                                <div className="space-y-2">
                                    <div className="border p-2 rounded-lg">
                                        <p>Menu Item ID: 35</p>
                                        <p>Quantity: 2</p>
                                        <p>Price (per item): ₹99</p>
                                        <p>Total Price: ₹198</p>
                                    </div>
                                    <div className="border p-2 rounded-lg">
                                        <p>Menu Item ID: 36</p>
                                        <p>Quantity: 1</p>
                                        <p>Price (per item): ₹119</p>
                                        <p>Total Price: ₹119</p>
                                    </div>
                                    <div className="border p-2 rounded-lg">
                                        <p>Menu Item ID: 37</p>
                                        <p>Quantity: 1</p>
                                        <p>Price (per item): ₹124</p>
                                        <p>Total Price: ₹124</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    );
}

export default OrderItemComponent;