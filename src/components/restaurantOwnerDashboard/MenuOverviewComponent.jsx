import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { setError, setLoading, setMenus, setRestaurantId } from "@/redux/slices/menuCreationSlice";
import { getAllMenus, getRestaurantId } from "@/services/menus/menuFeed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MenuOverviewComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;
    const { restaurantId , menus } = useSelector((store) => store.menu);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        dispatch(setLoading(true));
        const gettingRestaurantID = async() => {
            try{
                const restaurantId = await getRestaurantId({ userId });
                if(isMounted){
                    dispatch(setRestaurantId(restaurantId));
                }
            }
            catch(error){
                dispatch(setError(error.message));
            }
        }
        gettingRestaurantID();
        return () => {
            isMounted = false;
        }
    }, []);

    useEffect(() => {
        let isMounted = true;
        const getMenus = async() => {
            try{
                const response = await getAllMenus({ restaurantId });
                if(isMounted){
                    dispatch(setMenus(response));
                }
            }
            catch(error){
                dispatch(setError(error.message));
            }
        }
        getMenus();
        return () => {
            isMounted = false;
        }
    }, [restaurantId])

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
                                    <TableHead className="text-orange-400">description</TableHead>
                                    <TableHead className="text-orange-400">isActive</TableHead>
                                    <TableHead className="text-orange-400">Created On</TableHead>
                                    <TableHead className="text-orange-400">Updated On</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    menus.map((menu) => (
                                        <TableRow key={menu.menuId}>
                                                <TableCell>{menu.menuName}</TableCell>
                                                <TableCell>{menu.description}</TableCell>
                                                {/* <TableCell>{menu.isActive}</TableCell> */}
                                                <TableCell>{menu.isActive === true ? "Active" : "Inactive"}</TableCell>
                                                <TableCell>{menu.createdAt}</TableCell>
                                                <TableCell>{menu.updatedAt}</TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-2">
                                                        <button className="bg-white text-black px-2 py-1 rounded hover:bg-white">
                                                            View Items
                                                        </button>
                                                        <button className="bg-black text-white px-2 py-1 rounded hover:bg-black">
                                                            Edit
                                                        </button>
                                                        <button className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-900">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default MenuOverviewComponent;