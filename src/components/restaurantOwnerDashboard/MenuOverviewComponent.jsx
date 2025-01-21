import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function MenuOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-10 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium">Menu Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-300 bg-neutral-700 rounded-lg">
                    <div className="overflow-x-auto h-60">
                        <Table className="w-full text-neutral-300">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-orange-400">Menu Name</TableHead>
                                    <TableHead className="text-orange-400">Item Name</TableHead>
                                    <TableHead className="text-orange-400">Price</TableHead>
                                    <TableHead className="text-orange-400">Quantity</TableHead>
                                    <TableHead className="text-orange-400">Type</TableHead>
                                    <TableHead className="text-orange-400">Best Seller</TableHead>
                                    <TableHead className="text-orange-400">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Example row data; replace with dynamic data later */}
                                <TableRow>
                                    <TableCell>Snacks</TableCell>
                                    <TableCell>Samosa</TableCell>
                                    <TableCell>$2.00</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>Veg</TableCell>
                                    <TableCell>Yes</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                Edit
                                            </button>
                                            <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Desserts</TableCell>
                                    <TableCell>Chocolate Cake</TableCell>
                                    <TableCell>$5.00</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>Veg</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                Edit
                                            </button>
                                            <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Desserts</TableCell>
                                    <TableCell>Chocolate Cake</TableCell>
                                    <TableCell>$5.00</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>Veg</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                Edit
                                            </button>
                                            <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Desserts</TableCell>
                                    <TableCell>Chocolate Cake</TableCell>
                                    <TableCell>$5.00</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>Veg</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                Edit
                                            </button>
                                            <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Desserts</TableCell>
                                    <TableCell>Chocolate Cake</TableCell>
                                    <TableCell>$5.00</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>Veg</TableCell>
                                    <TableCell>No</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                Edit
                                            </button>
                                            <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                {/* Add more rows as needed */}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuOverviewComponent;