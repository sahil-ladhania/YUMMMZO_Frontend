import { ScrollArea } from "@/components/ui/scroll-area";
import { setIsMenuSelected, setMenuItems, setSelectedMenu } from "@/redux/slices/menuFeedSlice";
import { getAllMenuItems } from "@/services/menus/menuFeed";
import { useDispatch, useSelector } from "react-redux";

function MenuCategoriesComponents() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { menus , selectedMenu } = useSelector((store) => store.menuFeed);

    // Handler Function
    const openMenu = async (menuId) => {
        try {
            const menuItems = await getAllMenuItems({menuId});
            dispatch(setSelectedMenu(menuId));
            dispatch(setIsMenuSelected(true));
            dispatch(setMenuItems(menuItems));
        } 
        catch (error) {
            // dispatch
            console.error(error);
        }
    };   

    return (
        <>
            <ScrollArea className="h-[400px] rounded-md p-4 text-neutral-400 bg-neutral-900">
                <ul className="space-y-4">
                    {
                        menus.map((menu) => {
                            const isSelected = menu.menuId === selectedMenu;
                            return(
                                <li 
                                    onClick={() => openMenu(menu.menuId)} 
                                    key={menu.menuId} 
                                    className={`font-semibold cursor-pointer px-4 py-2 rounded-md ${
                                        isSelected ?
                                            "bg-orange-400 text-black"
                                            :
                                            "bg-neutral-800 hover:bg-neutral-700 text-gray-300"
                                    }`}
                                >
                                        {menu.menuName}
                                </li>
                            )
                        })
                    }
                </ul>
            </ScrollArea>
        </>
    );
}

export default MenuCategoriesComponents;