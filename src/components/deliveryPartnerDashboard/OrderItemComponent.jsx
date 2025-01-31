import { IoIosDoneAll } from "react-icons/io";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"  
import { Button } from "../ui/button";
import { MdDeliveryDining } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setError, setIsLoading, setUpdatedDeliveryStatus } from "@/redux/slices/deliveryManagementSlice";
import { updateOrderStatusToDelivered, updateOrderStatusToOnTheWay } from "@/services/deliveries/manageDeliveries";
import { Badge } from "../ui/badge";

function OrderItemComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const {partnerId , activeOrderDetails , activeOrderId} = useSelector((store) => store.deliveryManagement);
    const orderStatus = activeOrderDetails ? activeOrderDetails.orderStatus : null;
    const restaurantId = activeOrderDetails ? activeOrderDetails.restaurantId : null;

    // Handler Functions
    const handleUpdateToOrderOnTheWay = async(e) => {
        const {value} = e.target;
        const orderStatus = value;
        try {
            dispatch(setIsLoading(true));
            const response = await updateOrderStatusToOnTheWay({partnerId , restaurantId , orderId: activeOrderId , activeOrderDetails , orderStatus});
            dispatch(setUpdatedDeliveryStatus(response));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setIsLoading(false));
        }
    }

    const handleUpdateToOrderDelivered = async(e) => {
        const {value} = e.target;
        const orderStatus = value;
        try {
            dispatch(setIsLoading(true));
            const response = await updateOrderStatusToDelivered({partnerId , restaurantId , orderId: activeOrderId , activeOrderDetails , orderStatus});
            dispatch(setUpdatedDeliveryStatus(response));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setIsLoading(false));
        }
    }

    return (
        <>
            <Card className="p-4 bg-neutral-800 rounded-lg flex justify-between items-center border-none mb-4 text-white">
                <div className="flex justify-between w-7/12">
                    <p className="font-semibold">Order ID: {activeOrderDetails.orderId}</p>
                    {
                        orderStatus === "OUT_FOR_DELIVERY" 
                        &&
                        <p className="text-neutral-400 w-9/12">Status : PENDING</p>
                    }
                    {
                        orderStatus === "ON_THE_WAY"
                        &&
                        <p className="text-neutral-400 w-9/12">Status : {activeOrderDetails.orderStatus}</p>    
                    }
                    {
                        orderStatus === "DELIVERED"
                        &&
                        <p className="text-neutral-400 w-9/12">Status : {activeOrderDetails.orderStatus}</p>    
                    }
                </div>
                {
                    orderStatus === "OUT_FOR_DELIVERY"
                    &&
                    <Button onClick={handleUpdateToOrderOnTheWay} name="on-the-way" value="ON_THE_WAY" className="bg-white text-black hover:bg-white">
                        Accept Delivery
                        <MdDeliveryDining className="ml-1 size-10"/>
                    </Button>    
                }
                {
                    orderStatus === "ON_THE_WAY"
                    &&
                    <Button onClick={handleUpdateToOrderDelivered} name="delivered" value="DELIVERED" className="bg-orange-400 text-black hover:bg-orange-400">
                        Confirm Delivery
                        <IoIosDoneAll className="ml-1 size-10"/>
                    </Button>    
                }
                {
                    orderStatus === "DELIVERED"
                    &&
                    <Badge className="h-12 bg-orange-400 text-black">Order Delivered Successfully</Badge>
                }
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="bg-sky-700 text-white hover:bg-sky-700">
                            View Delivery Details
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-4xl w-full">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-lg font-semibold">Order Details</AlertDialogTitle>
                        </AlertDialogHeader>
                        {/* Order Info */}
                        <div className="space-y-2">
                            <p><span className="font-semibold">Order ID :</span> {activeOrderDetails.orderId}</p>
                            <p><span className="font-semibold">Total Price :</span> Rs. {activeOrderDetails.totalPrice}</p>
                            <p><span className="font-semibold">Order Status :</span> {activeOrderDetails.orderStatus}</p>
                        </div>
                        {/* Address Section */}
                        <div className="mt-4 space-y-1">
                            <p className="font-semibold">User Address:</p>
                            <p className="text-sm text-neutral-500">{activeOrderDetails.userAddress}</p>
                            <p className="font-semibold mt-2">Restaurant Address:</p>
                            <p className="text-sm text-neutral-500">{activeOrderDetails.restaurantAddress}</p>
                        </div>
                        {/* Order Items Table */}
                        <div className="mt-4">
                            <p className="font-semibold mb-2">Order Items:</p>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-1/4">Order Item ID</TableHead>
                                        <TableHead>Menu Item ID</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Item Price</TableHead>
                                        <TableHead>Total Price</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        activeOrderDetails?.orderItems?.map((item) => {
                                            return(
                                                <TableRow key={item.orderItemId}>
                                                    <TableCell>{item.orderItemId}</TableCell>
                                                    <TableCell>{item.menuItemId}</TableCell>
                                                    <TableCell>{item.quantity}</TableCell>
                                                    <TableCell>Rs. {item.itemPrice}</TableCell>
                                                    <TableCell>Rs. {item.totalPrice}</TableCell>
                                                </TableRow>            
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>

                        <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Card>
        </>
    );
}

export default OrderItemComponent;