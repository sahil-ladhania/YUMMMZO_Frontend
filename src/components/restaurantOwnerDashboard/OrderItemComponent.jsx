import { Button } from "@/components/ui/button.jsx";
import { RiProgress5Line } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
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
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";

function OrderItemComponent({ handleAcceptOrder , handleRejectOrder , handleUpdateToOrderInProgress , handleUpdateToOrderOutForDelivery , handleOpenOrderDetail , handleCloseOrderDetail , orderId , orderStatus , totalPrice}) {

    // useSelector
    const { selectedOrderDetails } = useSelector((store) => store.ownerOrderManagement);
    const userAddress = selectedOrderDetails ? selectedOrderDetails.userAddress : null;
    const restaurantAddress = selectedOrderDetails ? selectedOrderDetails.restaurantAddress : null;
    const createdAt = selectedOrderDetails ? selectedOrderDetails.createdAt : null;
    const orderedItems = selectedOrderDetails ? selectedOrderDetails.orderItems : null;
 
    return (
        <>
            <div className="flex items-center justify-between p-4 rounded-md bg-neutral-900 border-none">
                <div className="flex justify-between w-6/12">
                    <p className="text-neutral-300 text-sm font-medium">Order ID : {orderId}</p>
                    <p className="text-neutral-300 text-sm font-medium">Status : {orderStatus}</p>
                    <p className="text-neutral-300 text-sm font-medium">Amount : Rs. {totalPrice}</p>
                </div>
                {orderStatus === "PENDING" && (
                    <>
                        <Button onClick={handleAcceptOrder} name="accept" value="ACCEPTED" className="mx-2 bg-white text-black hover:bg-white">Accept Order</Button>
                        <Button onClick={handleRejectOrder} name="reject" value="REJECTED"  variant="destructive">Reject Order</Button>
                    </>
                )}
                {orderStatus === "ACCEPTED" && (
                    <Button onClick={handleUpdateToOrderInProgress} name="in-progress" value="IN_PROGRESS" className="mx-2 bg-orange-400 text-black hover:bg-orange-400">
                        Order In Progress
                        <RiProgress5Line className="ml-1 size-10"/>
                    </Button>
                )}
                {orderStatus === "IN_PROGRESS" && (
                    <Button onClick={handleUpdateToOrderOutForDelivery} name="out-for-delivery" value="OUT_FOR_DELIVERY" className="mx-2 bg-orange-400 text-black hover:bg-orange-400">
                        Out For Delivery
                    <MdDeliveryDining className="ml-1 size-10"/>
                </Button>
                )}
                {orderStatus === "OUT_FOR_DELIVERY" && (
                    <Badge className="h-12 bg-blue-500 hover:bg-blue-500 rounded-md">Order Left For Delivery</Badge>
                )}
                {orderStatus === "REJECTED" && (
                    <Badge className="h-12 text-white bg-red-600 hover:bg-red-600 rounded-md">Order Rejected</Badge>
                )}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button onClick={handleOpenOrderDetail} className="mx-2 bg-blue-600 text-white hover:bg-blue-700">View Order Details</Button>
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
                                            <TableCell className="text-sm">{orderId}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Status</TableCell>
                                            <TableCell className="text-sm">{orderStatus}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Total Price</TableCell>
                                            <TableCell className="text-sm">{totalPrice}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">User Address</TableCell>
                                            <TableCell className="text-sm">{userAddress}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Restaurant Address</TableCell>
                                            <TableCell className="text-sm">{restaurantAddress}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-sm font-semibold">Created At</TableCell>
                                            <TableCell className="text-sm">{createdAt}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            {/* Order Items */}
                            <div>
                                <h3 className="text-md font-semibold">Order Items</h3>
                                <div className="space-y-2">
                                    {
                                        orderedItems?.map((orderedItem) => {
                                            return(
                                                <div key={orderedItem.orderItemId} className="border p-2 rounded-lg">
                                                    <p>Menu Item ID : {orderedItem.menuItemId}</p>
                                                    <p>Quantity : {orderedItem.quantity}</p>
                                                    <p>Price (per item) : Rs. {orderedItem.itemPrice}</p>
                                                    <p>Total Price : Rs. {orderedItem.totalPrice}</p>
                                                </div>            
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={handleCloseOrderDetail}>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    );
}

export default OrderItemComponent;